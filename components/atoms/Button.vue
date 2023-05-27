<template>
  <button
    type="button"
    class="button"
    :class="getClass"
    :style="getStyle"
    :disabled="getDisabled"
    @mousedown="handleMousedown"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import type { CSSProperties } from 'vue';

  interface Props {
    fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    width?: `${number}px`;
    height?: `${number}px`;
    type?: 'fill' | 'outline';
    color?: `#${string}`;
    hoverColor?: `#${string}`;
    disabled?: boolean;
    disabledStyle?: boolean;
    padding?: `${number}px`;
    paddingTop?: `${number}px`;
    paddingBottom?: `${number}px`;
    paddingLeft?: `${number}px`;
    paddingRight?: `${number}px`;
    clickReaction?: 'flat' | 'ripple' | 'none';
  }

  const props = withDefaults(defineProps<Props>(), {
    fontSize: 'md',
    width: undefined,
    height: undefined,
    type: 'fill',
    color: '#30a13f',
    hoverColor: '#2b8b37',
    disabled: false,
    disabledStyle: true,
    padding: undefined,
    paddingTop: undefined,
    paddingBottom: undefined,
    paddingLeft: undefined,
    paddingRight: undefined,
    clickReaction: 'flat',
  });

  const { createRipple } = useCreateRipple();

  const handleMousedown = (event: MouseEvent) => {
    if (props.clickReaction === 'ripple') {
      createRipple(event, props.type === 'fill' ? '#ffffff55' : `${props.color}33`);
    }
  };

  const getClass = computed(() => {
    return {
      fill: props.type === 'fill',
      outline: props.type === 'outline',
      disabled: props.disabled,
      ['disabled-style']: props.disabled && props.disabledStyle,
      ['font-xs']: props.fontSize === 'xs',
      ['font-sm']: props.fontSize === 'sm',
      ['font-md']: props.fontSize === 'md',
      ['font-lg']: props.fontSize === 'lg',
      ['font-xl']: props.fontSize === 'xl',
      ripple: props.clickReaction === 'ripple',
      flat: props.clickReaction === 'flat',
    };
  });

  const getStyle = computed((): CSSProperties => {
    return {
      width: props.width,
      height: props.height,
      paddingTop: props.padding ?? props.paddingTop ?? '5px',
      paddingBottom: props.padding ?? props.paddingBottom ?? '5px',
      paddingLeft: props.padding ?? props.paddingLeft ?? '20px',
      paddingRight: props.padding ?? props.paddingRight ?? '20px',
    };
  });

  const getDisabled = computed(() => {
    return props.disabled;
  });
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100vh;
    font-weight: 400;
    font-size: var(--font-size-md);
    transition: color 0.2s, background-color 0.2s;

    &.disabled {
      pointer-events: none;
    }

    &.fill {
      background-color: v-bind(color);
      color: var(--white);

      @include hover() {
        background-color: v-bind(hoverColor);
      }
      &.disabled-style {
        background-color: var(--gray4);
      }
    }

    &.outline {
      border: 1px v-bind(color) solid;
      background-color: var(--white);
      color: v-bind(color);

      @include hover() {
        border: 1px v-bind(hoverColor) solid;
        color: v-bind(hoverColor);
        font-weight: 500;
      }

      &.disabled-style {
        border: 1px var(--gray3) solid;
        background-color: var(--white);
        color: var(--gray5);
        font-weight: 400;
      }
    }

    &.font-xs {
      font-size: var(--font-size-xs);
    }
    &.font-sm {
      font-size: var(--font-size-sm);
    }
    &.font-md {
      font-size: var(--font-size-md);
    }
    &.font-lg {
      font-size: var(--font-size-lg);
    }
    &.font-xl {
      font-size: var(--font-size-xl);
    }

    &.flat {
      &:active {
        background-color: var(--color13);
      }
    }
    &.ripple {
      position: relative;
      overflow: hidden;
    }
  }
</style>

<style lang="scss">
  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(1);
    }
  }
</style>
