export const useIsOpenSettingMenu = () => {
  const isOpenSettingMenu = useState<boolean>('isOpenSettingMenu', () => false);

  const updateIsOpenSettingMenu = (value: boolean) => {
    isOpenSettingMenu.value = value;
  };

  return {
    isOpenSettingMenu: readonly(isOpenSettingMenu),
    updateIsOpenSettingMenu,
  };
};
