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
    padding: 0 10px 100px 10px;
    max-width: 360px;
    width: 100%;
    height: calc(100vh - 40px);
    border-radius: 10px;
    background-color: var(--white);

    @include responsive(xs) {
    }
    @include responsive(sm) {
      padding: 0 20px 100px 20px;
      max-width: 560px;
    }
    @include responsive(md) {
      padding: 0 30px 100px 30px;
      max-width: 750px;
    }
    @include responsive(lg) {
      max-width: 970px;
    }
    @include responsive(xl) {
      max-width: 1200px;
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
