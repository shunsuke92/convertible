<template>
  <button
    type="button"
    class="button"
    :class="getClass"
    :style="getStyle"
    :disabled="disabled"
    @mousedown="handleMousedown"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import type { CSSProperties } from 'vue';
  const colorMode = useColorMode();

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
    color: undefined,
    hoverColor: undefined,
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
      const color: `#${string}` | `var(--${string}` =
        props.type === 'fill' ? '#ffffff' : `${getColor()}`;
      createRipple(event, color);
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
    const colorStyle =
      props.type === 'fill'
        ? props.disabled
          ? { backgroundColor: getDisabledColor() }
          : { backgroundColor: getColor() }
        : props.disabled
        ? { borderColor: getDisabledColor(), color: getDisabledColor() }
        : { borderColor: getColor(), color: getColor() };
    return {
      width: props.width,
      height: props.height,
      paddingTop: props.padding ?? props.paddingTop ?? '5px',
      paddingBottom: props.padding ?? props.paddingBottom ?? '5px',
      paddingLeft: props.padding ?? props.paddingLeft ?? '20px',
      paddingRight: props.padding ?? props.paddingRight ?? '20px',
      ...colorStyle,
    };
  });

  const getColor = () => {
    if (props.color === undefined) {
      return colorMode.value === 'light' ? 'var(--primary600)' : 'var(--gray200)';
    } else {
      return props.color;
    }
  };

  const getDisabledColor = () => {
    return colorMode.value === 'light' ? 'var(--gray500)' : 'var(--gray400)';
  };
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100vh;
    font-weight: 400;
    font-size: var(--font-size-md);
    transition: color 0.2s, background-color 0.2s, opacity 0.2s;

    &.disabled {
      pointer-events: none;
    }

    &.fill {
      color: var(--gray50);

      @include hover() {
        opacity: 0.8;
      }
      .dark-mode & {
        color: var(--gray950);
      }

      &.disabled-style {
        opacity: 0.3;
      }
    }

    &.outline {
      border: 1px solid;
      background-color: var(--gray50);

      @include hover() {
        background-color: var(--gray100);
        font-weight: 500;
        .dark-mode & {
          background-color: var(--gray600);
        }
      }

      .dark-mode & {
        background-color: var(--gray700);
      }

      &.disabled-style {
        background-color: var(--gray50);
        font-weight: 400;
        opacity: 0.3;
        .dark-mode & {
          background-color: var(--gray800);
        }
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
        background-color: var(--primary900);
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
