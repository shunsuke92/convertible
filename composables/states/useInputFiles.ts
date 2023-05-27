import { InputFiles, UpdataInputFiles } from '~/types/index';

export const useInputFiles = () => {
  const inputFiles: Ref<InputFiles[][]> = useState('inputFiles', () => []);

  const updateInputFiles = (value: UpdataInputFiles, fileIndex: number, settingIndex: number) => {
    inputFiles.value[fileIndex][settingIndex] = {
      ...inputFiles.value[fileIndex][settingIndex],
      ...value,
    };
  };

  const addInputFiles = (value: InputFiles[], fileIndex?: number) => {
    if (fileIndex === undefined) {
      // 新規ファイル作成
      inputFiles.value.push(value);
    } else {
      // 既存ファイルに設定追加
      inputFiles.value[fileIndex].push(...value);
    }
  };

  const clearInputFiles = () => {
    inputFiles.value.splice(0);
  };

  const deleteInputFiles = (fileIndex: number, settingIndex?: number) => {
    if (settingIndex === undefined) {
      // ファイル削除
      inputFiles.value.splice(fileIndex, 1);
    } else {
      // 設定削除
      inputFiles.value[fileIndex].splice(settingIndex, 1);
    }
  };

  const replaceInputFiles = (value: InputFiles[], fileIndex: number) => {
    inputFiles.value.splice(fileIndex, 1, value);
  };

  return {
    inputFiles: readonly(inputFiles),
    updateInputFiles,
    addInputFiles,
    clearInputFiles,
    deleteInputFiles,
    replaceInputFiles,
  };
};
