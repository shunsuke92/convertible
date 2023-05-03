<template>
  <button
    class="button ripple"
    :class="getClass"
    :style="getStyle"
    :disabled="getDisabled"
    @click="click"
    @mousedown="handleMousedown"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import type { CSSProperties } from 'vue';

  interface Props {
    fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl';
    width?: `${number}px`;
    height?: `${number}px`;
    type?: 'fill' | 'outline';
    color?: `#${string}`;
    hoverColor?: `#${string}`;
    disabled?: boolean;
    padding?: `${number}px`;
    paddingTop?: `${number}px`;
    paddingBottom?: `${number}px`;
    paddingLeft?: `${number}px`;
    paddingRight?: `${number}px`;
  }

  const props = withDefaults(defineProps<Props>(), {
    fontSize: 'md',
    width: undefined,
    height: undefined,
    type: 'fill',
    color: '#30a13f',
    hoverColor: '#2b8b37',
    disabled: false,
    padding: undefined,
    paddingTop: undefined,
    paddingBottom: undefined,
    paddingLeft: undefined,
    paddingRight: undefined,
  });

  const { createRipple } = useCreateRipple();

  const handleMousedown = (event: MouseEvent) => {
    createRipple(event, props.type === 'fill' ? '#ffffff55' : `${props.color}33`);
  };

  const getClass = computed(() => {
    return {
      fill: props.type === 'fill',
      outline: props.type === 'outline',
      disabled: props.disabled,
      fontXs: props.fontSize === 'xs',
      fontSm: props.fontSize === 'sm',
      fontMd: props.fontSize === 'md',
      fontLg: props.fontSize === 'lg',
      fontXl: props.fontSize === 'xl',
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
    border-radius: 50px;
    font-weight: 400;
    font-size: var(--font-size-md);
    transition: all 0.2s;

    &.fill {
      background-color: v-bind(color);
      color: var(--white);

      @include hover() {
        background-color: v-bind(hoverColor);
      }
      &.disabled {
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

      &.disabled {
        border: 1px var(--gray3) solid;
        background-color: var(--white);
        color: var(--gray5);
        font-weight: 400;
      }
    }

    &.fontXs {
      font-size: var(--font-size-xs);
    }
    &.fontSm {
      font-size: var(--font-size-sm);
    }
    &.fontMd {
      font-size: var(--font-size-md);
    }
    &.fontLg {
      font-size: var(--font-size-lg);
    }
    &.fontXl {
      font-size: var(--font-size-xl);
    }
  }

  .ripple {
    position: relative;
    overflow: hidden;
  }
</style>

<style>
  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(1);
    }
  }
</style>
