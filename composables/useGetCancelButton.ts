export const useGetCancelButton = () => {
  const { isConvertingSingle } = useIsConvertingSingle();
  const { isConvertingAll } = useIsConvertingAll();
  const { isBatchSetting } = useIsBatchSetting();
  const { convertingIndex } = useConvertingIndex();

  const getCancelButton = (index: number) => {
    if (isConvertingAll.value) {
      if (isBatchSetting.value) {
        return true;
      } else {
        return index === 9999;
      }
    } else if (isConvertingSingle.value) {
      return index === convertingIndex.value || index === 9999;
    } else {
      return false;
    }
  };

  return {
    getCancelButton,
  };
};
