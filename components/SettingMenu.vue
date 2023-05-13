<template>
  <div class="setting-menu">
    <SettingButton @click="handleClick" />
    <Menu
      :on="isOpenSettingMenu"
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
  const { isOpenSettingMenu } = useIsOpenSettingMenu();
  const { closeSettingMenu } = useCloseSettingMenu();
  const { openSettingMenu } = useOpenSettingMenu();

  const top = ref<number>(0);
  const right = 0;

  const handleClick = (event: any) => {
    openSettingMenu();
    top.value = event.target.clientWidth;
  };

  const handleClose = () => {
    closeSettingMenu();
  };
</script>

<style lang="scss" scoped>
  .setting-menu {
    position: relative;
  }
</style>
