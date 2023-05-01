import { backgroundFixed } from '~~/utils/backgroundFixed';

export const useCloseMenu = () => {
  const { updateIsOpenMenu } = useIsOpenMenu();
  const { updateSelectedMenuIndex } = useSelectedMenuIndex();
  const { updateSelectedMenuIndex2 } = useSelectedMenuIndex2();
  const { updatePaddingRight } = usePaddingRight();

  const closeMenu = () => {
    updateIsOpenMenu(false);
    updateSelectedMenuIndex(undefined);
    updateSelectedMenuIndex2(undefined);
    const paddingRight = backgroundFixed(false);
    updatePaddingRight(paddingRight);
  };

  return {
    closeMenu,
  };
};
