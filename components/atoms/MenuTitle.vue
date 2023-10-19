<template>
  <p class="title"><slot></slot></p>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .title {
    color: var(--gray700);
    font-weight: 500;
    font-size: var(--font-size-md);
    pointer-events: none;
    .dark-mode & {
      color: var(--gray300);
    }
  }
</style>
