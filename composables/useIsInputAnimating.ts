export const useIsInputAnimating = () => {
  const isInputAnimating: Ref<boolean> = useState('isInputAnimating', () => false);

  const updateIsInputAnimating = (value: boolean) => {
    isInputAnimating.value = value;
  };

  return {
    isInputAnimating: readonly(isInputAnimating),
    updateIsInputAnimating,
  };
};
