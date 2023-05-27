export const useGetFormat = () => {
  const { inputFiles } = useInputFiles();

  const getFormat = (index: number, index2: number) => {
    return inputFiles.value[index][index2].settingFormat;
  };

  return {
    getFormat,
  };
};
