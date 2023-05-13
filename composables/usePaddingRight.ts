export const usePaddingRight = () => {
  const paddingRight: Ref<string> = useState('paddingRight', () => '0');

  const updatePaddingRight = (value: string) => {
    paddingRight.value = value;
  };

  return {
    paddingRight: readonly(paddingRight),
    updatePaddingRight,
  };
};
