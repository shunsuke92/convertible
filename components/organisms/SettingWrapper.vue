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
    margin-right: 20px;
    padding: 7px 10px;
    width: 298px;
    border-radius: 8px;
    background-color: #ffffff;

    @include responsive(xs) {
    }
    @include responsive(sm) {
      margin-right: 40px;
      padding: 7px 18px;
      width: 420px;
    }
    @include responsive(md) {
      margin-right: 32px;
    }
    @include responsive(lg) {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      margin-right: 30px;
      width: 670px;
    }
    @include responsive(xl) {
    }
    @include responsive(xxl) {
    }

    .dark-mode & {
      background-color: var(--gray600);
    }
  }
</style>
