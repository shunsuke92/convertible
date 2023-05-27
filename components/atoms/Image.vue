<template>
  <img :src="file.originalInfo + file.originalImage" :alt="file.originalName" />
</template>

<script setup lang="ts">
  import { InputFiles } from '~/types/index';

  interface Props {
    file: InputFiles;
  }

  defineProps<Props>();
</script>

<style lang="scss" scoped></style>
