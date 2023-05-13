export const useWindowWidth = () => {
  const windowWidth: Ref<number> = useState('windowWidth', () => 0);

  const updateWindowWidth = (value: number) => {
    windowWidth.value = value;
  };

  return {
    windowWidth: readonly(windowWidth),
    updateWindowWidth,
  };
};
