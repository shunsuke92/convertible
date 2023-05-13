import { backgroundFixed } from '~~/utils/backgroundFixed';

export const useOpenImageList = () => {
  const { updateIsOpenImageList } = useIsOpenImageList();
  const { updatePaddingRight } = usePaddingRight();

  const openImageList = () => {
    updateIsOpenImageList(true);
    const paddingRight = backgroundFixed(true);
    updatePaddingRight(paddingRight);
  };

  return {
    openImageList,
  };
};
