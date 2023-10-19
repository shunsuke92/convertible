<template>
  <button
    type="button"
    class="button"
    :class="getClass"
    :style="getStyle"
    :disabled="disabled"
    @click="click"
  >
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
        '100vh',
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
    border: 1px var(--primary600) solid;
    background-color: var(--gray50);
    color: var(--primary600);
    font-weight: 500;
    font-size: var(--font-size-sm);
    transition: all 0.2s;

    @include hover() {
      border-color: var(--primary700);
      background-color: var(--primary100);
      color: var(--primary700);
      .dark-mode & {
        border-color: var(--gray300);
        background-color: var(--gray700);
        color: var(--gray300);
      }
    }

    .dark-mode & {
      border-color: var(--gray300);
      background-color: var(--gray800);
      color: var(--gray300);
    }

    &.selected {
      border-color: var(--primary700);
      background-color: var(--primary700);
      color: var(--gray50);
      .dark-mode & {
        border-color: var(--gray300);
        background-color: var(--gray300);
        color: var(--gray800);
      }
    }

    &.disabled {
      border-color: var(--gray400);
      background-color: var(--gray50);
      color: var(--gray400);
      pointer-events: none;
      .dark-mode & {
        border-color: var(--gray600);
        background-color: var(--gray800);
        color: var(--gray600);
      }
    }
  }
</style>
