<template>
  <Button padding="5px" width="50px" height="50px" @click="handleClick">
    <AddIcon />
  </Button>
</template>

<script setup lang="ts">
  const { addSetting } = useAddSetting();

  interface Props {
    fileIndex: number;
  }

  const props = defineProps<Props>();

  const handleClick = () => {
    addSetting(props.fileIndex);
  };
</script>

<style lang="scss" scoped></style>
