export const useSelectedMenuIndex2 = () => {
  const selectedMenuIndex2: Ref<number | undefined> = useState(
    'selectedMenuIndex2',
    () => undefined,
  );

  const updateSelectedMenuIndex2 = (value: number | undefined) => {
    selectedMenuIndex2.value = value;
  };

  return {
    selectedMenuIndex2: readonly(selectedMenuIndex2),
    updateSelectedMenuIndex2,
  };
};
