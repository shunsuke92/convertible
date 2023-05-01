export const useIsDownloadByFolder = () => {
  const isDownloadByFolder: Ref<boolean> = useState('isDownloadByFolder', () => true);

  const changeIsDownloadByFolder = () => {
    isDownloadByFolder.value = !isDownloadByFolder.value;
  };

  return {
    isDownloadByFolder: readonly(isDownloadByFolder),
    changeIsDownloadByFolder,
  };
};
