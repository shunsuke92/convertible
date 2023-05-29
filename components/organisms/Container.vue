<template>
  <div class="container">
    <div class="container-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .container-inner {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    padding: 110px 10px 100px 10px;
    min-height: 100vh;
    max-width: 360px;
    width: 100%;
    border-radius: 10px;
    background-color: var(--white);

    @include responsive(xs) {
    }
    @include responsive(sm) {
      padding: 110px 20px 100px 20px;
      max-width: 560px;
    }
    @include responsive(md) {
      padding: 110px 30px 100px 30px;
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
</style>
