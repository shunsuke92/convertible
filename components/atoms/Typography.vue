<template>
  <p :style="getStyle"><slot></slot></p>
</template>

<script setup lang="ts">
  import { Color } from '~/types/index';
  interface Props {
    fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: `#${string}` | Color;
    fontWeight?: 300 | 400 | 500 | 700;
  }

  const props = withDefaults(defineProps<Props>(), {
    fontSize: 'md',
    color: 'gray950',
    fontWeight: 300,
  });

  const getStyle = computed(() => {
    return {
      fontSize: `var(--font-size-${props.fontSize})`,
      color: props.color.startsWith('#') ? props.color : `var(--${props.color})`,
      fontWeight: props.fontWeight,
    };
  });
</script>

<style lang="scss" scoped></style>
