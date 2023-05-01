export const useConvertingIndex = () => {
  const convertingIndex: Ref<number | undefined> = useState('convertingIndex', () => undefined);

  const updateConvertingIndex = (value: number | undefined) => {
    convertingIndex.value = value;
  };

  return {
    convertingIndex: readonly(convertingIndex),
    updateConvertingIndex,
  };
};
