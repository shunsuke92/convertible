<template>
  <DeleteButton
    width="20px"
    icon-width="8px"
    :disabled="isConverting"
    class="content-delete-button"
    @click="handleClick(fileIndex)"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  />
</template>

<script setup lang="ts">
  const { isConverting } = useIsConverting();
  const { deleteImage } = useDeleteImage();
  const { updateIsMouseEnterDeleteButton } = useIsMouseEnterDeleteButton();

  interface Props {
    fileIndex: number;
  }

  defineProps<Props>();

  const handleClick = (fileIndex: number) => {
    deleteImage(fileIndex);
    updateIsMouseEnterDeleteButton(false);
  };

  const handleMouseEnter = () => {
    updateIsMouseEnterDeleteButton(true);
  };

  const handleMouseLeave = () => {
    updateIsMouseEnterDeleteButton(false);
  };
</script>

<style lang="scss" scoped>
  .content-delete-button {
    position: absolute;
    top: -8px;
    right: -8px;
  }
</style>
