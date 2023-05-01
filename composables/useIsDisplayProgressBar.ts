export const useIsDisplayProgressBar = () => {
  const isDisplayProgressBar: Ref<boolean> = useState('isDisplayProgressBar', () => false);

  const updateIsDisplayProgressBar = (value: boolean) => {
    isDisplayProgressBar.value = value;
  };

  return {
    isDisplayProgressBar: readonly(isDisplayProgressBar),
    updateIsDisplayProgressBar,
  };
};
