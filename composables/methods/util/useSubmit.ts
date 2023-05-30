import { Format, FormatLevel, UpdataInputFiles } from '~/types/index';
import axios from 'axios';

export const useSubmit = () => {
  const { isBatchSetting } = useIsBatchSetting();
  const { inputFiles, updateInputFiles } = useInputFiles();
  const { MAXIMUM_NUMBER_OF_SUBMIT } = useConstant();
  const { errorMessage } = useErrorMessage();
  const { updateIsConvertingSingle } = useIsConvertingSingle();
  const { updateIsConvertingAll } = useIsConvertingAll();
  const { updateIsCancelConversion } = useIsCancelConversion();
  const { updateNumberOfScheduledConversions } = useNumberOfScheduledConversions();
  const { updateNumberOfCompletedConversions, increaseNumberOfCompletedConversions } =
    useNumberOfCompletedConversions();
  const { updateIsDisplayProgressBar } = useIsDisplayProgressBar();
  const { updateIsAlreadySubmit } = useIsAlreadySubmit();
  const { updateConvertingIndex } = useConvertingIndex();
  const { isCancelConversion } = useIsCancelConversion();
  const { getFormat } = useGetFormat();

  const submit = async (index: number) => {
    if (isBatchSetting.value || index === 9999) {
      // 変換ファイルと変換済みファイルの合計を計算
      const fileNum = inputFiles.value.length;
      let total = 0;
      let done = 0;
      for (let i = 0; i < fileNum; i++) {
        // 変換ファイル
        total += inputFiles.value[i].length;

        // 変換済みファイル
        for (const value of inputFiles.value[i]) {
          if (value.outputFile) {
            done++;
          }
        }
      }

      preProcess(total, done, 'all', index);

      // 変換処理
      await submitAllFile();

      postProcess('all');
    } else {
      // 変換ファイルの合計を計算
      const total = inputFiles.value[index].length;

      // 変換済みファイルの合計を計算
      let done = 0;
      for (const value of inputFiles.value[index]) {
        if (value.outputFile) {
          done++;
        }
      }

      preProcess(total, done, 'single', index);

      // 変換処理
      await submitSingleFile(index);

      postProcess('single');
    }
  };

  const preProcess = (total: number, done: number, type: 'single' | 'all', index: number) => {
    // 送信上限のチェック
    if (total > MAXIMUM_NUMBER_OF_SUBMIT.value) {
      errorMessage(10);
      return;
    }

    // 変換中フラグをON
    if (type === 'all') {
      updateIsConvertingAll(true);
    } else {
      updateIsConvertingSingle(true);

      // キャンセルボタン表示用のキーを設定
      updateConvertingIndex(index);
    }

    // キャンセルフラグの初期化
    updateIsCancelConversion(false);

    // プログレスバー用の値を設定
    updateNumberOfScheduledConversions(total);
    updateNumberOfCompletedConversions(done);
    updateIsDisplayProgressBar(true);
    updateIsAlreadySubmit(false);
  };

  const postProcess = (type: 'single' | 'all') => {
    // 変換中フラグをOFF
    if (type === 'all') {
      updateIsConvertingAll(false);
    } else {
      updateIsConvertingSingle(false);

      // キャンセルボタン表示用のキーを初期化
      updateConvertingIndex(undefined);
    }
  };

  const submitAllFile = async () => {
    // ファイルごとにfileSubmitSingleを実行
    const length = inputFiles.value.length;
    for (let i = 0; i < length; i++) {
      await submitSingleFile(i);
    }
  };

  const submitSingleFile = async (index: number) => {
    // 設定ごとにsubmitを実行
    const length = inputFiles.value[index].length;
    for (let i = 0; i < length; i++) {
      await submitter(index, i);
    }
  };

  const submitter = async (index: number, index2: number) => {
    // 変換済みの場合は送信しない
    if (inputFiles.value[index][index2].outputImage) {
      return;
    }

    // キャンセルキーが押下されたとき
    if (isCancelConversion.value) return;

    // 送信データを作成
    const data = {
      image: inputFiles.value[index][index2].originalImage,
      type: inputFiles.value[index][index2].originalFormat,
      format: inputFiles.value[index][index2].settingFormat,
      original:
        inputFiles.value[index][index2].settingFormat ===
        inputFiles.value[index][index2].originalFormat,
      optimization: inputFiles.value[index][index2].settingOptimization,
      level: conversionFormatLevel(
        inputFiles.value[index][index2].settingFormat,
        inputFiles.value[index][index2].settingFormatLevel,
      ),
      lossless: inputFiles.value[index][index2].settingFormatLevel === 'lossless',
      resize:
        inputFiles.value[index][index2].originalWidth !==
          inputFiles.value[index][index2].settingWidth ||
        inputFiles.value[index][index2].originalHeight !==
          inputFiles.value[index][index2].settingHeight,
      width: inputFiles.value[index][index2].settingWidth,
      height: inputFiles.value[index][index2].settingHeight,
      fit: inputFiles.value[index][index2].settingFit,
      position: inputFiles.value[index][index2].settingPosition,
      background: inputFiles.value[index][index2].settingBackground,
    };
    // Amazon API Gatewayへの送信処理
    const runtimeConfig = useRuntimeConfig();
    let apiUrl: string;
    if (process.env.NODE_ENV === 'development') {
      apiUrl = '/dev/v1/image-converter';
    } else {
      apiUrl = 'https://0nw778k56a.execute-api.ap-northeast-1.amazonaws.com/api/v1/image-converter';
    }
    const response = await axios
      .post(apiUrl, data, {
        headers: {
          'x-api-key': runtimeConfig.public.apiKey,
        },
      })
      .then((res) => ({
        data: res,
        states: true,
      }))
      .catch((err) => {
        console.log(err);
        return {
          data: err,
          states: false,
        };
      });
    /* .catch((err) => ({
        data: err,
        states: false,
      })); */

    // 送信済みフラグをON
    updateIsAlreadySubmit(true);

    if (response.states) {
      // サーバー側でのエラーを検証
      if (response.data.data.errorMessage) {
        if (response.data.data.errorMessage.includes('timed out')) {
          errorMessage(5);
        } else if (response.data.data.errorMessage.includes('size exceeded maximum')) {
          errorMessage(6, inputFiles.value[index][index2].originalName);
        } else {
          errorMessage(7);
        }
        return;
      }

      // レスポンスボディーを取得
      const dataJson = response.data.data.body;

      // JSONをパースする
      const data = JSON.parse(dataJson);

      // Base64をfileに変換する
      const bin = atob(data.image);
      const buffer = new Uint8Array(bin.length);
      for (let j = 0; j < bin.length; j++) {
        buffer[j] = bin.charCodeAt(j);
      }
      const file = new File([buffer.buffer], `output.${getFormat(index, index2)}`, {
        type: `image/${getFormat(index, index2)}`,
      });

      // 変換後の情報部を作成
      const info = inputFiles.value[index][index2].originalInfo.replace(
        inputFiles.value[index][index2].originalFormat,
        inputFiles.value[index][index2].settingFormat,
      );

      // アウトプットファイルを格納
      const outputData: UpdataInputFiles = {
        outputImage: data.image,
        outputInfo: info,
        outputImageSize: file.size,
        outputFile: file,
      };
      updateInputFiles(outputData, index, index2);

      // 変換完了数をカウントアップ
      increaseNumberOfCompletedConversions();
    } else {
      errorMessage(8);
    }
  };

  const conversionFormatLevel = (format: Format, level: FormatLevel) => {
    if (level === 'lossless') return 0;

    if (format === 'jpeg' || format === 'webp' || format === 'avif') {
      if (level === 'high') return 100;
      else if (level === 'middle') return 80;
      else if (level === 'low') return 50;
      else return 80;
    } else {
      return 0;
    }
  };

  return {
    submit,
  };
};
