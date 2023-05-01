export const useIsOpenMenu = () => {
  const isOpenMenu = useState<boolean>('isOpenMenu', () => false);

  const updateIsOpenMenu = (value: boolean) => {
    isOpenMenu.value = value;
  };

  return {
    isOpenMenu: readonly(isOpenMenu),
    updateIsOpenMenu,
  };
};
