export const useDeleteImage = () => {
  const { isBatchSetting } = useIsBatchSetting();
  const { isOpenImageList } = useIsOpenImageList();
  const { clearInputFiles, deleteInputFiles } = useInputFiles();

  const deleteImage = (fileIndex: number) => {
    if (isBatchSetting.value && !isOpenImageList.value) {
      // 同一設定中のため、すべてのファイルを操作
      clearInputFiles();
    } else {
      deleteInputFiles(fileIndex);
    }
  };

  return {
    deleteImage,
  };
};
