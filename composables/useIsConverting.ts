export const useIsConverting = () => {
  const { isConvertingSingle } = useIsConvertingSingle();
  const { isConvertingAll } = useIsConvertingAll();

  const isConverting = computed(() => {
    return isConvertingSingle.value || isConvertingAll.value;
  });

  return {
    isConverting,
  };
};
