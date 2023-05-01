export const useCloseImageList = () => {
  const { updateIsOpenImageList } = useIsOpenImageList();

  const closeImageList = () => {
    updateIsOpenImageList(false);
  };

  return {
    closeImageList,
  };
};
