export const useIsAlreadySubmit = () => {
  const isAlreadySubmit: Ref<boolean> = useState('isAlreadySubmit', () => false);

  const updateIsAlreadySubmit = (value: boolean) => {
    isAlreadySubmit.value = value;
  };

  return {
    isAlreadySubmit: readonly(isAlreadySubmit),
    updateIsAlreadySubmit,
  };
};
