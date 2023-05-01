import { backgroundFixed } from '~~/utils/backgroundFixed';

export const useOpenMenu = () => {
  const { updateIsOpenMenu } = useIsOpenMenu();
  const { updateSelectedMenuIndex } = useSelectedMenuIndex();
  const { updateSelectedMenuIndex2 } = useSelectedMenuIndex2();
  const { updatePaddingRight } = usePaddingRight();

  const openMenu = (index: number, index2: number) => {
    updateIsOpenMenu(true);
    updateSelectedMenuIndex(index);
    updateSelectedMenuIndex2(index2);
    const paddingRight = backgroundFixed(true);
    updatePaddingRight(paddingRight);
  };

  return {
    openMenu,
  };
};
