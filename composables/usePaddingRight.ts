export const usePaddingRight = () => {
  const paddingRight: Ref<string> = useState('paddingRight', () => '');

  const updatePaddingRight = (value: string) => {
    paddingRight.value = value;
  };

  return {
    paddingRight: readonly(paddingRight),
    updatePaddingRight,
  };
};
