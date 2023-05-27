import { backgroundFixed } from '~~/utils/backgroundFixed';

export const useOpenHamburgerMenu = () => {
  const { updateIsOpenHamburgerMenu } = useIsOpenHamburgerMenu();
  const { updatePaddingRight } = usePaddingRight();

  const openHamburgerMenu = () => {
    updateIsOpenHamburgerMenu(true);
    const paddingRight = backgroundFixed(true);
    updatePaddingRight(paddingRight);
  };

  return {
    openHamburgerMenu,
  };
};
