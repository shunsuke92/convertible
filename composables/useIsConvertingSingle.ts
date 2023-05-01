export const useIsConvertingSingle = () => {
  const isConvertingSingle: Ref<boolean> = useState('isConvertingSingle', () => false);

  const updateIsConvertingSingle = (value: boolean) => {
    isConvertingSingle.value = value;
  };

  return {
    isConvertingSingle: readonly(isConvertingSingle),
    updateIsConvertingSingle,
  };
};
