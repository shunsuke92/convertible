<template>
  <div v-if="on" class="mask" @click="click"></div>
</template>

<script setup lang="ts">
  interface Props {
    on: boolean;
  }

  defineProps<Props>();

  const emit = defineEmits<{ (e: 'click', value: void): void }>();

  const click = () => {
    emit('click');
  };
</script>

<style lang="scss" scoped>
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    width: 100vw;
    height: 100vh;
    background-color: var(--white-transparent);
  }
</style>
