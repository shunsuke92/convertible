import { backgroundFixed } from '~~/utils/backgroundFixed';

export const useCloseHamburgerMenu = () => {
  const { updateIsOpenHamburgerMenu } = useIsOpenHamburgerMenu();
  const { updatePaddingRight } = usePaddingRight();

  const closeHamburgerMenu = () => {
    updateIsOpenHamburgerMenu(false);
    const paddingRight = backgroundFixed(false);
    updatePaddingRight(paddingRight);
  };

  return {
    closeHamburgerMenu,
  };
};
