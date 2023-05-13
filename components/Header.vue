<template>
  <Stack0 class="header" align-items="center" justify-content="space-between">
    <Logo />
    <BatchSettingSwitchOnTop v-if="windowWidth >= 768" />
    <SettingMenu v-else />
  </Stack0>
</template>

<script setup lang="ts">
  const { windowWidth } = useWindowWidth();
</script>

<style lang="scss" scoped>
  .header {
    padding: 20px 0;
    width: 100%;

    @include responsive(xs) {
    }
    @include responsive(sm) {
    }
    @include responsive(md) {
    }
    @include responsive(lg) {
    }
    @include responsive(xl) {
      padding: 24px 0;
    }
    @include responsive(xxl) {
    }
  }
</style>
