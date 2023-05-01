<template>
  <!-- <RippleRoot> -->
  <main class="main">
    <div class="container">
      <Logo />
      <BatchSettingSwitch />
      <DropArea />
      <Contents />
      <!-- <Attention /> -->
      <SettingBar />
      <ImageList />
      <Menu />
    </div>
  </main>
  <!-- </RippleRoot> -->
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .main {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--color1);

    @include responsive(xl) {
      align-items: center;
      justify-content: center;
    }
  }

  .container {
    position: relative;
    display: flex;
    overflow-x: auto;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 60px 30px 100px 30px;
    min-height: calc(100vh - 40px);
    width: 1180px;
    border-radius: 10px;
    background-color: var(--white);
  }

  // TransitionGroupでのアニメーション時にスクロールバーが表示されてしまうため、スクロールバーを非表示にする。
  .container {
    scrollbar-width: none; /*Firefox*/
    -ms-overflow-style: none; /*IE*/
  }

  .container::-webkit-scrollbar {
    display: none; /*Chrome、Safari、Edge*/
  }
</style>
