import { UpdataInputFiles } from '../types/index';

export const useCancelMenu = () => {
  const { inputFiles, updateInputFiles } = useInputFiles();
  const { selectedMenuIndex } = useSelectedMenuIndex();
  const { selectedMenuIndex2 } = useSelectedMenuIndex2();
  const { closeMenu } = useCloseMenu();
  const { isBatchSetting } = useIsBatchSetting();

  const cancelMenu = (isAutoAspectRatio: boolean) => {
    setIsAutoAspectRatio(isAutoAspectRatio);
    closeMenu();
  };

  const setIsAutoAspectRatio = (value: boolean) => {
    if (selectedMenuIndex.value === undefined || selectedMenuIndex2.value === undefined) return;
    if (isBatchSetting.value) {
      const length = inputFiles.value.length;
      for (let i = 0; i < length; i++) {
        const updateData: UpdataInputFiles = {
          isAutoAspectRatio: value,
        };

        updateInputFiles(updateData, i, selectedMenuIndex2.value);
      }
    } else {
      const updateData: UpdataInputFiles = {
        isAutoAspectRatio: value,
      };

      updateInputFiles(updateData, selectedMenuIndex.value, selectedMenuIndex2.value);
    }
  };

  return {
    cancelMenu,
  };
};
