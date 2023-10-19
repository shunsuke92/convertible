<template>
  <div v-if="on" class="mask" :style="getStyle" @click="click"></div>
</template>

<script setup lang="ts">
  interface Props {
    on: boolean;
    top?: `${number}px`;
    bottom?: `${number}px`;
    left?: `${number}px`;
    right?: `${number}px`;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{ (e: 'click', value: void): void }>();

  const click = () => {
    emit('click');
  };

  const getStyle = computed(() => {
    const isSetTopBottom = props.top !== undefined || props.bottom !== undefined;
    const isSetLeftRight = props.left !== undefined || props.right !== undefined;
    return {
      top: isSetTopBottom ? (props.top !== undefined ? props.top : 'auto') : 0,
      bottom: isSetTopBottom ? (props.bottom !== undefined ? props.bottom : 'auto') : 'auto',
      left: isSetLeftRight ? (props.left !== undefined ? props.left : 'auto') : 0,
      right: isSetLeftRight ? (props.right !== undefined ? props.right : 'auto') : 'auto',
    };
  });
</script>

<style lang="scss" scoped>
  .mask {
    position: fixed;
    z-index: 500;
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    opacity: 0.5;
    .dark-mode & {
      background-color: var(--gray500);
    }
  }
</style>
