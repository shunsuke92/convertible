<template>
  <Button
    type="outline"
    clickReaction="none"
    :width="width"
    :height="width"
    padding="0px"
    class="button"
    :style="getStyle"
    :disabled="disabled"
    :disabledStyle="false"
  >
    <ClearIcon :width="iconWidth" />
  </Button>
</template>

<script setup lang="ts">
  interface Props {
    width?: `${number}px`;
    iconWidth?: `${number}px`;
    disabled?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    width: '18px',
    iconWidth: '8px',
    disabled: false,
  });

  const getStyle = computed(() => {
    return {
      width: props.width,
      height: props.width,
    };
  });
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
