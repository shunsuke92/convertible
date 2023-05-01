<template>
  <p class="name">{{ file.originalName }}</p>
</template>

<script setup lang="ts">
  import { InputFiles } from '../types/index';

  interface Props {
    file: InputFiles;
  }

  defineProps<Props>();
</script>

<style lang="scss" scoped>
  .name {
    color: var(--gray9);
    font-weight: 400;
    font-size: var(--font-size-lg);
  }
</style>
