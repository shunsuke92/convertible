<template>
  <Stack class="setting-bar" :style="getStyle">
    <Stack class="setting-bar-inner">
      <ZipDownloadSwitchOnTop v-if="windowWidth >= 768" />
      <ProgressBar />
      <Stack :spaceing="16">
        <ConversionAllButton />
        <DownloadAllButton />
      </Stack>
    </Stack>
  </Stack>
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
    height: 90px;
    background-color: var(--color1);
  }

  .setting-bar-inner {
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    width: 360px;
    height: 70px;
    border-top: 2px var(--gray0) solid;
    border-radius: 0 0 10px 10px;
    background-color: var(--white);

    @include responsive(xs) {
    }
    @include responsive(sm) {
      width: 560px;
    }
    @include responsive(md) {
      justify-content: space-between;
      width: 750px;
    }
    @include responsive(lg) {
      width: 970px;
    }
    @include responsive(xl) {
      width: 1200px;
    }
    @include responsive(xxl) {
    }
  }
</style>
