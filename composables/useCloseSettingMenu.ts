import { backgroundFixed } from '~~/utils/backgroundFixed';

export const useCloseSettingMenu = () => {
  const { updateIsOpenSettingMenu } = useIsOpenSettingMenu();
  const { updatePaddingRight } = usePaddingRight();

  const closeSettingMenu = () => {
    updateIsOpenSettingMenu(false);
    const paddingRight = backgroundFixed(false);
    updatePaddingRight(paddingRight);
  };

  return {
    closeSettingMenu,
  };
};
