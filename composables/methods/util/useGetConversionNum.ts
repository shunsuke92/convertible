export const useGetConversionNum = () => {
  const { inputFiles } = useInputFiles();

  const getConversionNum = (index?: number) => {
    // 変換ファイルと変換済みファイルの合計を計算
    let total = 0;
    let done = 0;
    if (index !== undefined) {
      total = inputFiles.value[index].length;

      for (const value of inputFiles.value[index]) {
        if (value.outputFile) {
          done++;
        }
      }
    } else {
      const fileNum = inputFiles.value.length;

      for (let i = 0; i < fileNum; i++) {
        total += inputFiles.value[i].length;

        for (const value of inputFiles.value[i]) {
          if (value.outputFile) {
            done++;
          }
        }
      }
    }

    return {
      total,
      done,
    };
  };

  return { getConversionNum };
};
