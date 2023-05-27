<template>
  <div class="hamburger-menu">
    <SettingButton @click="handleClick" />
    <Menu
      :on="isOpenHamburgerMenu"
      position="absolute"
      :top="`${top}px`"
      :right="`${right}px`"
      @close="handleClose"
    >
      <MenuHeader>設定</MenuHeader>
      <MenuList>
        <BatchSettingSwitchOnMenu />
        <ZipDownloadSwitchOnMenu />
      </MenuList>
    </Menu>
  </div>
</template>

<script setup lang="ts">
  const { isOpenHamburgerMenu } = useIsOpenHamburgerMenu();
  const { closeHamburgerMenu } = useCloseHamburgerMenu();
  const { openHamburgerMenu } = useOpenHamburgerMenu();

  const top = ref<number>(0);
  const right = 0;

  // eslint-disable-next-line
  const handleClick = (event: any) => {
    openHamburgerMenu();
    top.value = event.target.clientWidth;
  };

  const handleClose = () => {
    closeHamburgerMenu();
  };
</script>

<style lang="scss" scoped>
  .hamburger-menu {
    position: relative;
  }
</style>
