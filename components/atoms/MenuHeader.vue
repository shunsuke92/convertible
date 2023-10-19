<template>
  <div class="header">
    <p class="header-text">
      <slot></slot>
    </p>
  </div>
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
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    background-color: var(--primary700);
    .dark-mode & {
      background-color: var(--gray700);
    }
  }

  .header-text {
    color: var(--gray50);
    font-weight: 500;
    font-size: var(--font-size-xl);
  }
</style>
