export const useIsConvertingAll = () => {
  const isConvertingAll: Ref<boolean> = useState('isConvertingAll', () => false);

  const updateIsConvertingAll = (value: boolean) => {
    isConvertingAll.value = value;
  };

  return {
    isConvertingAll: readonly(isConvertingAll),
    updateIsConvertingAll,
  };
};
