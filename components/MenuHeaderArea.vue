<template>
  <div class="header"><p class="header-text">設定</p></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    width: 100%;
    height: 50px;
    border-radius: 10px 10px 0 0;
    background-color: var(--color5);
  }

  .header-text {
    color: var(--white);
    font-weight: 500;
    font-size: var(--font-size-xl);
  }
</style>
