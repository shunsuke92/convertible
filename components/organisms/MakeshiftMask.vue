<template>
  <Transition name="fade-mask">
    <Mask :on="isOpenHamburgerMenu" bottom="0px" style="height: 90px" @click="handleClick" />
  </Transition>
</template>

<script setup lang="ts">
  const { isOpenHamburgerMenu } = useIsOpenHamburgerMenu();
  const { closeHamburgerMenu } = useCloseHamburgerMenu();

  const handleClick = () => {
    closeHamburgerMenu();
  };
</script>

<style lang="scss" scoped>
  .fade-mask-enter-active,
  .fade-mask-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .fade-mask-enter-from,
  .fade-mask-leave-to {
    opacity: 0;
  }
</style>
