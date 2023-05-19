import { InputFiles } from '../types/index';

export const useSetFirstSettingToAll = () => {
  const { isBatchSetting } = useIsBatchSetting();
  const { inputFiles, replaceInputFiles } = useInputFiles();
  const { createId } = useCreateId();

  // すべての画像に１つ目の設定を適応する
  const setFirstSettingToAll = () => {
    if (inputFiles.value.length === 0 || !isBatchSetting.value) return;

    const fileNum = inputFiles.value.length;
    const settingNum = inputFiles.value[0].length;

    for (let i = 1; i < fileNum; i++) {
      const setData: InputFiles[] = [];
      for (let j = 0; j < settingNum; j++) {
        const firstFile = inputFiles.value[0][j];
        const targetFile = inputFiles.value[i][0];

        // 一番上のファイルの各設定に変更があるか？
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
        const isOptimizationAvailable = targetFile.originalFormat === 'jpeg';

        const data: InputFiles = {
          originalName: targetFile.originalName,
          originalFileSize: targetFile.originalFileSize,
          originalWidth: targetFile.originalWidth,
          originalHeight: targetFile.originalHeight,
          originalFormat: targetFile.originalFormat,
          originalInfo: targetFile.originalInfo,
          originalImage: targetFile.originalImage,
          settingFormat: isReformat ? firstFile.settingFormat : targetFile.originalFormat,
          settingFormatLevel: isReformatLevel ? firstFile.settingFormatLevel : 'middle',
          settingWidth: isResize ? firstFile.settingWidth : targetFile.originalWidth,
          settingHeight: isResize ? firstFile.settingHeight : targetFile.originalHeight,
          settingFit: isRefit ? firstFile.settingFit : 'cover',
          settingPosition: isReposition ? firstFile.settingPosition : 'center',
          settingBackground: isRebackground ? firstFile.settingBackground : '#000000',
          settingOptimization:
            isReoptimization && isOptimizationAvailable ? firstFile.settingOptimization : false,
          outputInfo: '',
          outputImage: '',
          outputImageSize: 0,
          outputFile: undefined,
          isAutoAspectRatio: firstFile.isAutoAspectRatio,
          fileId: targetFile.fileId,
          settingId: createId(),
        };

        setData.push(data);
      }
      replaceInputFiles(setData, i);
    }
  };

  return {
    setFirstSettingToAll,
  };
};
