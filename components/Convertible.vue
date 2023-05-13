<template>
  <main class="main">
    <div class="container">
      <Header />
      <DropArea />
      <Contents />
      <!-- <Attention /> -->
      <SettingBar />
      <ImageList />
      <Editor />
    </div>
  </main>
</template>

<script setup lang="ts">
  const { updateWindowWidth } = useWindowWidth();

  onMounted(() => {
    updateWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      updateWindowWidth(window.innerWidth);
    });
  });

  onUnmounted(() => {
    window.removeEventListener('resize', () => {
      updateWindowWidth(window.innerWidth);
    });
  });
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background-color: var(--color1);
  }

  .container {
    position: relative;
    display: flex;
    overflow-x: auto;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 30px 100px 30px;
    padding-right: calc((100% - 360px) / 2);
    padding-left: calc((100% - 360px) / 2);
    max-width: 1200px;
    width: 100%;
    height: 100%;
    background-color: var(--white);

    @include responsive(xs) {
    }
    @include responsive(sm) {
      padding-right: calc((100% - 560px) / 2);
      padding-left: calc((100% - 560px) / 2);
    }
    @include responsive(md) {
      padding-right: calc((100% - 750px) / 2);
      padding-left: calc((100% - 750px) / 2);
    }
    @include responsive(lg) {
      padding-right: calc((100% - 970px) / 2);
      padding-left: calc((100% - 970px) / 2);
    }
    @include responsive(xl) {
      padding: 0 30px 100px 30px;
      height: calc(100vh - 40px);
      border-radius: 10px;
    }
    @include responsive(xxl) {
    }
  }

  // TransitionGroupでのアニメーション時にスクロールバーが表示されてしまうため、スクロールバーを非表示にする。
  .container {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE */
  }

  .container::-webkit-scrollbar {
    display: none; /* Chrome、Safari、Edge */
  }
</style>
