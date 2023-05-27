export const useIsOpenHamburgerMenu = () => {
  const isOpenHamburgerMenu = useState<boolean>('isOpenHamburgerMenu', () => false);

  const updateIsOpenHamburgerMenu = (value: boolean) => {
    isOpenHamburgerMenu.value = value;
  };

  return {
    isOpenHamburgerMenu: readonly(isOpenHamburgerMenu),
    updateIsOpenHamburgerMenu,
  };
};
