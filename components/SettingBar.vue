<template>
  <div class="setting-bar" :style="getStyle">
    <Stack0 class="setting-bar-inner">
      <ZipDownloadSwitchOnTop v-if="windowWidth >= 768" />
      <ProgressBar />
      <Stack16>
        <ConversionAllButton />
        <DownloadAllButton />
      </Stack16>
    </Stack0>
  </div>
</template>

<script setup lang="ts">
  const { paddingRight } = usePaddingRight();
  const { windowWidth } = useWindowWidth();

  const getStyle = computed(() => {
    return { paddingRight: paddingRight.value };
  });
</script>

<style lang="scss" scoped>
  .setting-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 200;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 70px;
    background-color: var(--color1);

    @include responsive(xs) {
    }
    @include responsive(sm) {
    }
    @include responsive(md) {
    }
    @include responsive(lg) {
    }
    @include responsive(xl) {
      height: 90px;
    }
    @include responsive(xxl) {
    }
  }

  .setting-bar-inner {
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    width: 1200px;
    height: 70px;
    border-top: 2px var(--gray0) solid;
    background-color: var(--white);

    @include responsive(xs) {
    }
    @include responsive(sm) {
    }
    @include responsive(md) {
      justify-content: space-between;
    }
    @include responsive(lg) {
    }
    @include responsive(xl) {
      border-radius: 0 0 10px 10px;
    }
    @include responsive(xxl) {
    }
  }
</style>
