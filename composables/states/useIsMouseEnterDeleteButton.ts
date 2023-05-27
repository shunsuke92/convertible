export const useIsMouseEnterDeleteButton = () => {
  const isMouseEnterDeleteButton = useState<boolean>('isMouseEnterDeleteButton', () => false);

  const updateIsMouseEnterDeleteButton = (value: boolean) => {
    isMouseEnterDeleteButton.value = value;
  };

  return {
    isMouseEnterDeleteButton: readonly(isMouseEnterDeleteButton),
    updateIsMouseEnterDeleteButton,
  };
};
