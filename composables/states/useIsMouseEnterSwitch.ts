export const useIsMouseEnterSwitch = () => {
  const isMouseEnterSwitch = useState<boolean>('isMouseEnterSwitch', () => false);

  const updateIsMouseEnterSwitch = (value: boolean) => {
    isMouseEnterSwitch.value = value;
  };

  return {
    isMouseEnterSwitch: readonly(isMouseEnterSwitch),
    updateIsMouseEnterSwitch,
  };
};
