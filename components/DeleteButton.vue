<template>
  <button
    type="button"
    class="button"
    :style="getStyle"
    :disabled="props.disabled"
    @click="click"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
  >
    <svg
      class="icon"
      :style="getIconStyle"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 156 153.78"
      fill="#231815"
    >
      <path
        d="M151.77,129.15l-53.36-53.36,51.16-51.16c5.64-5.64,5.64-14.77,0-20.4s-14.77-5.64-20.4,0l-51.16,51.16L26.84,4.23C21.21-1.41,12.08-1.41,6.44,4.23,.8,9.86,.8,19,6.44,24.63l51.16,51.16L4.23,129.15c-5.64,5.64-5.64,14.77,0,20.41,2.82,2.82,6.51,4.23,10.2,4.23s7.38-1.41,10.2-4.23l53.37-53.36,53.36,53.36c2.82,2.82,6.51,4.23,10.2,4.23s7.38-1.41,10.2-4.23c5.64-5.64,5.64-14.77,0-20.41Z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
  const props = defineProps({
    top: {
      type: String,
      required: false,
      default: '-5px',
    },
    right: {
      type: String,
      required: false,
      default: '-5px',
    },
    width: {
      type: String,
      required: false,
      default: '18px',
    },
    iconWidth: {
      type: String,
      required: false,
      default: '8px',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  });

  const getStyle = computed(() => {
    return {
      top: props.top,
      right: props.right,
      width: props.width,
      height: props.width,
    };
  });

  const getIconStyle = computed(() => {
    return {
      width: props.iconWidth,
      height: props.iconWidth,
    };
  });

  const emit = defineEmits<{
    (e: 'click', value: void): void;
    (e: 'mouseenter', value: void): void;
    (e: 'mouseleave', value: void): void;
  }>();

  const click = () => {
    emit('click');
  };

  const mouseenter = () => {
    emit('mouseenter');
  };

  const mouseleave = () => {
    emit('mouseleave');
  };
</script>

<style lang="scss" scoped>
  .button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px var(--color5) solid;
    border-radius: 20px;
    background-color: var(--white);
  }

  .icon {
    fill: var(--color5);
  }
</style>
