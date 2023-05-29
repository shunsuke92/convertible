<template>
  <Bar type="top">
    <Logo />
    <BatchSettingSwitchOnTop v-if="windowWidth >= 768" />
    <HamburgerMenu v-else style="position: absolute; right: 30px" />
  </Bar>
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
