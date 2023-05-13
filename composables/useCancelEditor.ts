import { UpdataInputFiles } from '../types/index';

export const useCancelEditor = () => {
  const { inputFiles, updateInputFiles } = useInputFiles();
  const { selectedEditorIndex } = useSelectedEditorIndex();
  const { selectedEditorIndex2 } = useSelectedEditorIndex2();
  const { closeEditor } = useCloseEditor();
  const { isBatchSetting } = useIsBatchSetting();

  const cancelEditor = (isAutoAspectRatio: boolean) => {
    setIsAutoAspectRatio(isAutoAspectRatio);
    closeEditor();
  };

  const setIsAutoAspectRatio = (value: boolean) => {
    if (selectedEditorIndex.value === undefined || selectedEditorIndex2.value === undefined) return;
    if (isBatchSetting.value) {
      const length = inputFiles.value.length;
      for (let i = 0; i < length; i++) {
        const updateData: UpdataInputFiles = {
          isAutoAspectRatio: value,
        };

        updateInputFiles(updateData, i, selectedEditorIndex2.value);
      }
    } else {
      const updateData: UpdataInputFiles = {
        isAutoAspectRatio: value,
      };

      updateInputFiles(updateData, selectedEditorIndex.value, selectedEditorIndex2.value);
    }
  };

  return {
    cancelEditor,
  };
};
