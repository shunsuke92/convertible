<template>
  <InputButton :accept="SUPPORT_FORMAT.join(',')" :multiple="true" @change="handleChange">
    ファイルを選択
  </InputButton>
</template>

<script setup lang="ts">
  const { SUPPORT_FORMAT } = useConstant();

  // eslint-disable-next-line
  const emit = defineEmits<{ (e: 'change', value: any): void }>();

  // eslint-disable-next-line
  const handleChange = (event: any) => {
    emit('change', event);
  };
</script>

<style lang="scss" scoped></style>
