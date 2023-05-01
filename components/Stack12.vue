<template>
  <div class="stack" :style="getStyle" :class="getClass">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type { CSSProperties } from 'vue';

  interface Props {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    justifyContent?:
      | 'flex-start'
      | 'center'
      | 'flex-end'
      | 'space-between'
      | 'space-around'
      | 'space-evenly';
  }

  const props = defineProps<Props>();

  const getStyle = computed((): CSSProperties | undefined => {
    return {
      flexDirection: props.direction,
      alignItems: props.alignItems,
      justifyContent: props.justifyContent,
    };
  });

  const getClass = computed(() => {
    return {
      row:
        props.direction === 'row' ||
        props.direction === 'row-reverse' ||
        props.direction === undefined,
      column: props.direction === 'column' || props.direction === 'column-reverse',
    };
  });
</script>

<style lang="scss" scoped>
  .stack {
    display: flex;
  }

  .row {
    & > :not(:last-child) {
      margin-right: 12px;
    }
  }
  .column {
    & > :not(:last-child) {
      margin-bottom: 12px;
    }
  }
</style>
