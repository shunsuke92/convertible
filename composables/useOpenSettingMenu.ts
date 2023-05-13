import { backgroundFixed } from '~~/utils/backgroundFixed';

export const useOpenSettingMenu = () => {
  const { updateIsOpenSettingMenu } = useIsOpenSettingMenu();
  const { updatePaddingRight } = usePaddingRight();

  const openSettingMenu = () => {
    updateIsOpenSettingMenu(true);
    const paddingRight = backgroundFixed(true);
    updatePaddingRight(paddingRight);
  };

  return {
    openSettingMenu,
  };
};
