export const useSelectedMenuIndex = () => {
  const selectedMenuIndex: Ref<number | undefined> = useState('selectedMenuIndex', () => undefined);

  const updateSelectedMenuIndex = (value: number | undefined) => {
    selectedMenuIndex.value = value;
  };

  return {
    selectedMenuIndex: readonly(selectedMenuIndex),
    updateSelectedMenuIndex,
  };
};
