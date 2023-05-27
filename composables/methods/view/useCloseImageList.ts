import { backgroundFixed } from '~~/utils/backgroundFixed';

export const useCloseImageList = () => {
  const { updateIsOpenImageList } = useIsOpenImageList();
  const { updatePaddingRight } = usePaddingRight();

  const closeImageList = () => {
    updateIsOpenImageList(false);
    const paddingRight = backgroundFixed(false);
    updatePaddingRight(paddingRight);
  };

  return {
    closeImageList,
  };
};
