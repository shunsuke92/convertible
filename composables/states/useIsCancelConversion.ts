export const useIsCancelConversion = () => {
  const isCancelConversion: Ref<boolean> = useState('isCancelConversion', () => false);

  const updateIsCancelConversion = (value: boolean) => {
    isCancelConversion.value = value;
  };

  return {
    isCancelConversion: readonly(isCancelConversion),
    updateIsCancelConversion,
  };
};
