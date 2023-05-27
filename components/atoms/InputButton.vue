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
    background-color: var(--color5);
    color: var(--white);
    font-size: var(--font-size-md);
    cursor: pointer;
    transition: background-color 0.18s;

    @include hover() {
      background-color: var(--color6);
    }
    &:active {
      background-color: var(--color13);
    }
  }

  .upload {
    display: none;
  }
</style>
