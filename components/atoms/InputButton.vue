<template>
  <input
    id="upload"
    class="upload"
    type="file"
    :accept="accept"
    :multiple="multiple"
    @change="handleChange"
  />
  <label for="upload" class="upload-label"><slot></slot></label>
</template>

<script setup lang="ts">
  interface Props {
    accept?: string;
    multiple?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    accept: undefined,
    multiple: false,
  });

  // eslint-disable-next-line
  const emit = defineEmits<{ (e: 'change', value: any): void }>();

  // eslint-disable-next-line
  const handleChange = (event: any) => {
    emit('change', event);
  };
</script>

<style lang="scss" scoped>
  .upload-label {
    display: inline;
    padding: 6px 12px;
    border-radius: 4px;
    background-color: var(--primary700);
    color: var(--gray50);
    font-size: var(--font-size-md);
    cursor: pointer;
    transition: background-color 0.18s;

    @include hover() {
      background-color: var(--primary800);
      .dark-mode & {
        background-color: var(--gray400);
      }
    }
    &:active {
      background-color: var(--primary900);
      .dark-mode & {
        background-color: var(--gray500);
      }
    }

    .dark-mode & {
      background-color: var(--gray300);
      color: var(--gray950);
    }
  }

  .upload {
    display: none;
  }
</style>
