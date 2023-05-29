<template>
  <main v-if="windowWidth > 0" class="main">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
  const { windowWidth } = useWindowWidth();
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    background-color: var(--color1);
  }
</style>
