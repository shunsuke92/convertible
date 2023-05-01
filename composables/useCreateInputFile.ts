import { InputFiles, Format } from '../types/index';

export const useCreateInputFile = () => {
  interface ConversionBase64 {
    data: string;
    status: boolean;
  }

  interface ImageSize {
    data: HTMLImageElement;
    status: boolean;
  }

  const { SUPPORT_FORMAT, MAXIMUM_NUMBER_OF_IMAGES } = useConstant();
  const { errorMessage } = useErrorMessage();
  const { inputFiles, addInputFiles } = useInputFiles();
  const { isBatchSetting } = useIsBatchSetting();
  const { updateIsInputAnimating } = useIsInputAnimating();
  const { createId } = useCreateId();

  const conversionBase64 = (src: File): Promise<ConversionBase64> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () =>
        resolve({ data: typeof reader.result === 'string' ? reader.result : '', status: true });
      reader.onerror = () => reject({ data: '', status: false });
      reader.readAsDataURL(src);
    });
  };

  const getImageSize = (src: File): Promise<ImageSize> => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve({ data: image, status: true });
      image.onerror = () => reject({ data: '', status: false });
      image.src = URL.createObjectURL(src);
    });
  };

  const checkFile = (files: File[]): File[] => {
    // ファイル形式のチェック
    const checkedFormat = files.filter((item) => SUPPORT_FORMAT.value.includes(item.type));

    // ファイルサイズのチェック(4.2MBまで許可)
    const checkedSize = checkedFormat.filter((item) => item.size < 4200000);

    // アップロードのエラーメッセージを表示
    if (checkedFormat.length === 0) {
      errorMessage(1);
    } else if (checkedFormat.length < files.length) {
      errorMessage(2);
    } else if (checkedSize.length < checkedFormat.length) {
      errorMessage(3);
    }

    return checkedSize;
  };

  const getFormat = (data: string): Format | undefined => {
    const tmpFormat = data.substring(0, data.indexOf(';'));
    const format = tmpFormat.substring(tmpFormat.indexOf('/') + 1);
    if (
      format === 'jpeg' ||
      format === 'png' ||
      format === 'webp' ||
      format === 'gif' ||
      format === 'avif'
    ) {
      return format;
    } else {
      return undefined;
    }
  };

  const getImage = (data: string): { info: string; image: string } => {
    // 画像（情報部）を取得
    const info = data.substring(0, data.indexOf('base64,') + 7);

    // 画像（データ部）を取得
    const image = data.substring(data.indexOf('base64,') + 7);

    return { info, image };
  };

  const createInputFile = async (files: File[]) => {
    const isFirstInput = inputFiles.value.length === 0;

    // ファイルをチェック
    const checkedFiles = checkFile(files);

    // データをローカルに保存
    for (let i = 0; i < checkedFiles.length; i++) {
      // 枚数チェック
      if (inputFiles.value.length >= MAXIMUM_NUMBER_OF_IMAGES.value) {
        errorMessage(9);
        return;
      }

      // Base64変換
      const imageBase64 = await conversionBase64(checkedFiles[i]);

      // Base64変換でエラーがあれば処理をここで終える
      if (imageBase64.status === false) {
        errorMessage(4, checkedFiles[i].name);
        continue;
      }

      // フォーマット取得
      const format = getFormat(imageBase64.data);

      // フォーマット取得でエラーがあれば処理をここで終える
      if (format === undefined) {
        errorMessage(11);
        continue;
      }

      // 画像データ取得（情報部、データ部）
      const { info, image } = getImage(imageBase64.data);

      // 画像サイズを取得
      let width: number;
      let height: number;
      const imageSize = await getImageSize(checkedFiles[i]);

      if (imageSize.status !== false) {
        width = imageSize.data.width;
        height = imageSize.data.height;
      } else {
        errorMessage(4, checkedFiles[i].name);
        continue;
      }

      // データを作成
      if (isBatchSetting.value && inputFiles.value.length > 0) {
        // 同一設定中
        const firstFileSettingNum = inputFiles.value[0].length;
        const settingData: InputFiles[] = [];
        for (let j = 0; j < firstFileSettingNum; j++) {
          const firstFile = inputFiles.value[0][j];
          const isResize = !(
            firstFile.originalWidth === firstFile.settingWidth &&
            firstFile.originalHeight === firstFile.settingHeight
          );
          const isReformat = !(firstFile.originalFormat === firstFile.settingFormat);
          const isReformatLevel = !('middle' === firstFile.settingFormatLevel);
          const isRefit = !('cover' === firstFile.settingFit);
          const isReposition = !('center' === firstFile.settingPosition);
          const isRebackground = !('#000000' === firstFile.settingBackground);
          const isReoptimization = !(false === firstFile.settingOptimization);
          const isOptimizationAvailable = format === 'jpeg';

          const data: InputFiles = {
            originalName: checkedFiles[i].name,
            originalFileSize: checkedFiles[i].size,
            originalWidth: width,
            originalHeight: height,
            originalFormat: format,
            originalInfo: info,
            originalImage: image,
            settingFormat: isReformat ? firstFile.settingFormat : format,
            settingFormatLevel: isReformatLevel ? firstFile.settingFormatLevel : 'middle',
            settingWidth: isResize ? firstFile.settingWidth : width,
            settingHeight: isResize ? firstFile.settingHeight : height,
            settingFit: isRefit ? firstFile.settingFit : 'cover',
            settingPosition: isReposition ? firstFile.settingPosition : 'center',
            settingBackground: isRebackground ? firstFile.settingBackground : '#000000',
            settingOptimization:
              isReoptimization && isOptimizationAvailable ? firstFile.settingOptimization : false,
            outputInfo: '',
            outputImage: '',
            outputImageSize: 0,
            outputFile: undefined,
            isAutoAspectRatio: true,
            fileId: createId(),
            settingId: createId(),
          };
          settingData.push(data);
        }
        addInputFiles(settingData);
      } else {
        const data: InputFiles[] = [
          {
            originalName: checkedFiles[i].name,
            originalFileSize: checkedFiles[i].size,
            originalWidth: width,
            originalHeight: height,
            originalFormat: format,
            originalInfo: info,
            originalImage: image,
            settingFormat: format,
            settingFormatLevel: 'middle',
            settingWidth: width,
            settingHeight: height,
            settingFit: 'cover',
            settingPosition: 'center',
            settingBackground: '#000000',
            settingOptimization: false,
            outputInfo: '',
            outputImage: '',
            outputImageSize: 0,
            outputFile: undefined,
            isAutoAspectRatio: true,
            fileId: createId(),
            settingId: createId(),
          },
        ];
        addInputFiles(data);
      }
    }

    // アニメーションを発火
    if (checkedFiles.length > 0 && isBatchSetting.value && !isFirstInput) {
      updateIsInputAnimating(true);
      setTimeout(() => {
        updateIsInputAnimating(false);
      }, 1000);
    }
  };

  return {
    createInputFile,
  };
};
