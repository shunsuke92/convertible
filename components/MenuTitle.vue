<template>
  <p class="title"><slot></slot></p>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .title {
    color: var(--gray8);
    font-weight: 500;
    font-size: var(--font-size-md);
    pointer-events: none;
  }
</style>
