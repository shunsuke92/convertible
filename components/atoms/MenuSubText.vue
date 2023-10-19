<template>
  <p class="sub-text"><slot></slot></p>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .sub-text {
    color: var(--gray600);
    font-weight: 400;
    font-size: var(--font-size-xs);
    pointer-events: none;
    .dark-mode & {
      color: var(--gray400);
    }
  }
</style>
