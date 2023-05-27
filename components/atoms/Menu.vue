<template>
  <template v-if="on">
    <Mask @click="handleClick" :on="on" />
    <div class="menu" :style="getStyle">
      <slot></slot>
    </div>
  </template>
</template>

<script setup lang="ts">
  interface Props {
    on: boolean;
    width?: `${number}px`;
    height?: `${number}px`;
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    top?: `${number}px` | string;
    bottom?: `${number}px` | string;
    left?: `${number}px` | string;
    right?: `${number}px` | string;
    cs?: object;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{ (e: 'close', value: void): void }>();

  const getStyle = computed(() => {
    return {
      width: props.width,
      height: props.height,
      position: props.position,
      top: props.top,
      bottom: props.bottom,
      left: props.left,
      right: props.right,
      ...props.cs,
    };
  });

  const handleClick = () => {
    emit('close');
  };
</script>

<style lang="scss" scoped>
  .menu {
    z-index: 1000;
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.3);
  }
</style>
