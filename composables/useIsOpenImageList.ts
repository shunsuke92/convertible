export const useIsOpenImageList = () => {
  const isOpenImageList: Ref<boolean> = useState('isOpenImageList', () => false);

  const updateIsOpenImageList = (value: boolean) => {
    isOpenImageList.value = value;
  };

  return {
    isOpenImageList: readonly(isOpenImageList),
    updateIsOpenImageList,
  };
};
