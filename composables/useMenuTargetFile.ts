export const useMenuTargetFile = () => {
  const { inputFiles } = useInputFiles();
  const { selectedMenuIndex } = useSelectedMenuIndex();
  const { selectedMenuIndex2 } = useSelectedMenuIndex2();

  const menuTargetFile = () => {
    return inputFiles.value[selectedMenuIndex.value ?? 0][selectedMenuIndex2.value ?? 0];
  };

  return {
    menuTargetFile,
  };
};
