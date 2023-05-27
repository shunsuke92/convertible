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
    spaceing?: 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32;
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
      [`row${props.spaceing}`]:
        props.spaceing !== undefined &&
        (props.direction === 'row' ||
          props.direction === 'row-reverse' ||
          props.direction === undefined),
      [`column${props.spaceing}`]:
        props.spaceing !== undefined &&
        (props.direction === 'column' || props.direction === 'column-reverse'),
    };
  });
</script>

<style lang="scss" scoped>
  .stack {
    display: flex;
  }

  .row4 {
    & > :not(:last-child) {
      margin-right: 4px;
    }
  }
  .column4 {
    & > :not(:last-child) {
      margin-bottom: 4px;
    }
  }
  .row6 {
    & > :not(:last-child) {
      margin-right: 6px;
    }
  }
  .column6 {
    & > :not(:last-child) {
      margin-bottom: 6px;
    }
  }
  .row8 {
    & > :not(:last-child) {
      margin-right: 8px;
    }
  }
  .column8 {
    & > :not(:last-child) {
      margin-bottom: 8px;
    }
  }
  .row10 {
    & > :not(:last-child) {
      margin-right: 10px;
    }
  }
  .column10 {
    & > :not(:last-child) {
      margin-bottom: 10px;
    }
  }
  .row12 {
    & > :not(:last-child) {
      margin-right: 12px;
    }
  }
  .column12 {
    & > :not(:last-child) {
      margin-bottom: 12px;
    }
  }
  .row14 {
    & > :not(:last-child) {
      margin-right: 14px;
    }
  }
  .column14 {
    & > :not(:last-child) {
      margin-bottom: 14px;
    }
  }
  .row16 {
    & > :not(:last-child) {
      margin-right: 16px;
    }
  }
  .column16 {
    & > :not(:last-child) {
      margin-bottom: 16px;
    }
  }
  .row18 {
    & > :not(:last-child) {
      margin-right: 18px;
    }
  }
  .column18 {
    & > :not(:last-child) {
      margin-bottom: 18px;
    }
  }
  .row20 {
    & > :not(:last-child) {
      margin-right: 20px;
    }
  }
  .column20 {
    & > :not(:last-child) {
      margin-bottom: 20px;
    }
  }
  .row22 {
    & > :not(:last-child) {
      margin-right: 22px;
    }
  }
  .column22 {
    & > :not(:last-child) {
      margin-bottom: 22px;
    }
  }
  .row24 {
    & > :not(:last-child) {
      margin-right: 24px;
    }
  }
  .column24 {
    & > :not(:last-child) {
      margin-bottom: 24px;
    }
  }
  .row26 {
    & > :not(:last-child) {
      margin-right: 26px;
    }
  }
  .column26 {
    & > :not(:last-child) {
      margin-bottom: 26px;
    }
  }
  .row28 {
    & > :not(:last-child) {
      margin-right: 28px;
    }
  }
  .column28 {
    & > :not(:last-child) {
      margin-bottom: 28px;
    }
  }
  .row30 {
    & > :not(:last-child) {
      margin-right: 30px;
    }
  }
  .column30 {
    & > :not(:last-child) {
      margin-bottom: 30px;
    }
  }
  .row32 {
    & > :not(:last-child) {
      margin-right: 32px;
    }
  }
  .column32 {
    & > :not(:last-child) {
      margin-bottom: 32px;
    }
  }
</style>
