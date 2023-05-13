import { EditorSetttingValue, UpdataInputFiles } from '../types/index';

export const useUpdateInputFileWithSettingData = () => {
  const { inputFiles, updateInputFiles } = useInputFiles();
  const { selectedEditorIndex } = useSelectedEditorIndex();
  const { selectedEditorIndex2 } = useSelectedEditorIndex2();
  const { isBatchSetting } = useIsBatchSetting();

  const updateInputFileWithSettingData = (res: EditorSetttingValue) => {
    if (selectedEditorIndex.value === undefined || selectedEditorIndex2.value === undefined) return;
    if (isBatchSetting.value) {
      const length = inputFiles.value.length;
      for (let i = 0; i < length; i++) {
        const firstFile = inputFiles.value[0][selectedEditorIndex2.value];
        const isResize = !(
          firstFile.originalWidth === res.width && firstFile.originalHeight === res.height
        );
        const isReformat = !(firstFile.originalFormat === res.format);
        const isReformatLevel = !('middle' === res.formatLevel);
        const isRefit = !('cover' === res.fit);
        const isReposition = !('center' === res.position);
        const isRebackground = !('#000000' === res.background);
        const isReoptimization = !(false === res.optimization);
        const isOptimizationAvailable =
          inputFiles.value[i][selectedEditorIndex2.value].originalFormat === 'jpeg';

        const updateData: UpdataInputFiles = {
          settingFormat: isReformat
            ? res.format
            : inputFiles.value[i][selectedEditorIndex2.value].originalFormat,
          settingFormatLevel: isReformatLevel ? res.formatLevel : 'middle',
          settingWidth: isResize
            ? res.width
            : inputFiles.value[i][selectedEditorIndex2.value].originalWidth,
          settingHeight: isResize
            ? res.height
            : inputFiles.value[i][selectedEditorIndex2.value].originalHeight,
          settingFit: isRefit ? res.fit : 'cover',
          settingPosition: isReposition ? res.position : 'center',
          settingBackground: isRebackground ? res.background : '#000000',
          settingOptimization:
            isReoptimization && isOptimizationAvailable ? res.optimization : false,
          outputInfo: '',
          outputImage: '',
          outputImageSize: 0,
          outputFile: undefined,
          isAutoAspectRatio: res.isAutoAspectRatio,
        };

        updateInputFiles(updateData, i, selectedEditorIndex2.value);
      }
    } else {
      const updateData: UpdataInputFiles = {
        settingFormat: res.format,
        settingFormatLevel: res.formatLevel,
        settingWidth: res.width,
        settingHeight: res.height,
        settingFit: res.fit,
        settingPosition: res.position,
        settingBackground: res.background,
        settingOptimization: res.optimization,
        outputInfo: '',
        outputImage: '',
        outputImageSize: 0,
        outputFile: undefined,
        isAutoAspectRatio: res.isAutoAspectRatio,
      };

      updateInputFiles(updateData, selectedEditorIndex.value, selectedEditorIndex2.value);
    }
  };

  return {
    updateInputFileWithSettingData,
  };
};
