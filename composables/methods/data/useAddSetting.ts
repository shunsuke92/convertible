import { InputFiles } from '~/types/index';

export const useAddSetting = () => {
  const { inputFiles, addInputFiles } = useInputFiles();
  const { isBatchSetting } = useIsBatchSetting();
  const { createId } = useCreateId();

  const addSetting = (index: number) => {
    if (isBatchSetting.value) {
      const fileNum = inputFiles.value.length;
      for (let i = 0; i < fileNum; i++) {
        const data: InputFiles[] = [
          {
            originalName: inputFiles.value[i][0].originalName,
            originalFileSize: inputFiles.value[i][0].originalFileSize,
            originalWidth: inputFiles.value[i][0].originalWidth,
            originalHeight: inputFiles.value[i][0].originalHeight,
            originalFormat: inputFiles.value[i][0].originalFormat,
            originalInfo: inputFiles.value[i][0].originalInfo,
            originalImage: inputFiles.value[i][0].originalImage,
            settingFormat: inputFiles.value[i][0].originalFormat,
            settingFormatLevel: 'middle',
            settingWidth: inputFiles.value[i][0].originalWidth,
            settingHeight: inputFiles.value[i][0].originalHeight,
            settingFit: 'cover',
            settingPosition: 'center',
            settingBackground: '#000000',
            settingOptimization: false,
            outputInfo: '',
            outputImage: '',
            outputImageSize: 0,
            outputFile: undefined,
            isAutoAspectRatio: true,
            fileId: inputFiles.value[i][0].fileId,
            settingId: createId(),
          },
        ];
        addInputFiles(data, i);
      }
    } else {
      const data: InputFiles[] = [
        {
          originalName: inputFiles.value[index][0].originalName,
          originalFileSize: inputFiles.value[index][0].originalFileSize,
          originalWidth: inputFiles.value[index][0].originalWidth,
          originalHeight: inputFiles.value[index][0].originalHeight,
          originalFormat: inputFiles.value[index][0].originalFormat,
          originalInfo: inputFiles.value[index][0].originalInfo,
          originalImage: inputFiles.value[index][0].originalImage,
          settingFormat: inputFiles.value[index][0].originalFormat,
          settingFormatLevel: 'middle',
          settingWidth: inputFiles.value[index][0].originalWidth,
          settingHeight: inputFiles.value[index][0].originalHeight,
          settingFit: 'cover',
          settingPosition: 'center',
          settingBackground: '#000000',
          settingOptimization: false,
          outputInfo: '',
          outputImage: '',
          outputImageSize: 0,
          outputFile: undefined,
          isAutoAspectRatio: true,
          fileId: inputFiles.value[index][0].fileId,
          settingId: createId(),
        },
      ];
      addInputFiles(data, index);
    }
  };

  return {
    addSetting,
  };
};
