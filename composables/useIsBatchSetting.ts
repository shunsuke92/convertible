export const useIsBatchSetting = () => {
  const isBatchSetting: Ref<boolean> = useState('isBatchSetting', () => false);

  const updateIsBatchSetting = (value: boolean) => {
    isBatchSetting.value = value;
  };

  const changeIsBatchSetting = () => {
    isBatchSetting.value = !isBatchSetting.value;
  };

  return {
    isBatchSetting: readonly(isBatchSetting),
    updateIsBatchSetting,
    changeIsBatchSetting,
  };
};
