<template>
  <div class="switch" :style="getStyle" :class="getClass">
    <p v-if="textPosition === 'left'" class="text left"><slot></slot></p>
    <button
      class="button"
      :class="{ on: on }"
      aria-label="switch"
      :disabled="disabled"
      @click="click"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
    ></button>
    <p v-if="textPosition === 'right'" class="text right"><slot></slot></p>
  </div>
</template>

<script setup lang="ts">
  import type { CSSProperties } from 'vue';

  const props = defineProps({
    on: {
      type: Boolean,
      required: true,
    },
    textPosition: {
      type: String,
      required: false,
      default: undefined,
    },
    top: {
      type: String,
      required: false,
      default: undefined,
    },
    bottom: {
      type: String,
      required: false,
      default: undefined,
    },
    left: {
      type: String,
      required: false,
      default: undefined,
    },
    right: {
      type: String,
      required: false,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  });

  const getStyle = computed((): CSSProperties | undefined => {
    if (props.top || props.bottom || props.left || props.right) {
      return {
        position: 'absolute',
        top: props.top ? props.top : '',
        bottom: props.bottom ? props.bottom : '',
        left: props.left ? props.left : '',
        right: props.right ? props.right : '',
      };
    } else {
      return undefined;
    }
  });

  const getClass = computed(() => {
    return {
      disabled: props.disabled,
    };
  });

  const emit = defineEmits<{
    (e: 'click', value: boolean): void;
    (e: 'mouseenter', value: void): void;
    (e: 'mouseleave', value: void): void;
  }>();

  const click = () => {
    emit('click', props.on);
  };

  const mouseenter = () => {
    emit('mouseenter');
  };

  const mouseleave = () => {
    emit('mouseleave');
  };
</script>

<style lang="scss" scoped>
  .switch {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .text {
    color: var(--gray8);
    font-weight: 400;
    font-size: var(--font-size-sm);
    &.left {
      margin-right: 10px;
    }
    &.right {
      margin-left: 10px;
    }
  }

  .button {
    position: relative;
    width: 40px;
    height: 21px;
    border-radius: 50px;
    background-color: var(--gray3);
    transition: background-color 0.18s;
    &::before {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 15px;
      height: 15px;
      border-radius: 20px;
      background-color: var(--white);
      content: '';
      transition: left 0.18s;
    }
    &.on {
      background-color: var(--color5);
      &::before {
        left: 22px;
      }
    }

    .disabled & {
      background-color: var(--gray2);
      &::before {
        background-color: var(--gray0);
      }
      &.on {
        background-color: var(--color12);
      }
    }
  }
</style>
