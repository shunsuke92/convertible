<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
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
