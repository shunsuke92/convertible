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
    overflow: hidden;
    max-width: 300px;
    color: var(--gray9);
    text-overflow: ellipsis;
    font-weight: 400;
    font-size: var(--font-size-lg);

    @include responsive(xs) {
    }
    @include responsive(sm) {
      max-width: 280px;
    }
    @include responsive(md) {
      max-width: 400px;
    }
    @include responsive(lg) {
      max-width: 650px;
    }
    @include responsive(xl) {
      max-width: 650px;
    }
    @include responsive(xxl) {
    }
  }
</style>
