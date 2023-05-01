<template>
  <button class="button" :class="getClass" :style="getStyle" :disabled="disabled" @click="click">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import type { CSSProperties } from 'vue';

  const props = defineProps({
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    padding: {
      type: Number,
      required: false,
      default: undefined,
    },
    paddingTop: {
      type: Number,
      required: false,
      default: undefined,
    },
    paddingBottom: {
      type: Number,
      required: false,
      default: undefined,
    },
    paddingLeft: {
      type: Number,
      required: false,
      default: undefined,
    },
    paddingRight: {
      type: Number,
      required: false,
      default: undefined,
    },
    borderRadius: {
      type: Number,
      required: false,
      default: undefined,
    },
  });

  const getClass = computed(() => {
    return {
      disabled: props.disabled,
      selected: props.selected,
    };
  });

  const getStyle = computed((): CSSProperties | undefined => {
    return {
      paddingTop:
        (props.padding !== undefined ? `${props.padding}px` : props.padding) ??
        (props.paddingTop !== undefined ? `${props.paddingTop}px` : props.paddingTop) ??
        '1px',
      paddingBottom:
        (props.padding !== undefined ? `${props.padding}px` : props.padding) ??
        (props.paddingBottom !== undefined ? `${props.paddingBottom}px` : props.paddingBottom) ??
        '1px',
      paddingLeft:
        (props.padding !== undefined ? `${props.padding}px` : props.padding) ??
        (props.paddingLeft !== undefined ? `${props.paddingLeft}px` : props.paddingLeft) ??
        '10px',
      paddingRight:
        (props.padding !== undefined ? `${props.padding}px` : props.padding) ??
        (props.paddingRight !== undefined ? `${props.paddingRight}px` : props.paddingRight) ??
        '10px',
      borderRadius:
        (props.borderRadius !== undefined ? `${props.borderRadius}px` : props.borderRadius) ??
        '50px',
    };
  });

  const emit = defineEmits<{ (e: 'click', value: void): void }>();
  const click = () => {
    emit('click');
  };
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px var(--color9) solid;
    background-color: var(--color7);
    color: var(--color11);
    font-weight: 500;
    font-size: var(--font-size-sm);
    transition: all 0.2s;

    @include hover() {
      border-color: var(--color10);
      background-color: var(--color8);
      &.selected {
        border-color: var(--color6);
        background-color: var(--color6);
      }
      &.disabled {
        border-color: var(--gray3);
        background-color: var(--white);
        color: var(--gray3);
      }
    }

    &.selected {
      border-color: var(--color5);
      background-color: var(--color5);
      color: var(--white);
    }

    &.disabled {
      border-color: var(--gray3);
      background-color: var(--white);
      color: var(--gray3);
    }
  }
</style>
