<template>
  <div class="setting-wrapper">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .setting-wrapper {
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin-right: 40px;
    padding: 7px 10px;
    width: 305px;
    border-radius: 8px;
    background-color: var(--white);

    @include responsive(xs) {
    }
    @include responsive(sm) {
      padding: 7px 18px;
      width: 450px;
    }
    @include responsive(md) {
    }
    @include responsive(lg) {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      margin-right: 30px;
      width: 700px;
    }
    @include responsive(xl) {
    }
    @include responsive(xxl) {
    }
  }
</style>
