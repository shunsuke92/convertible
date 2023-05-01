<template>
  <div class="menu">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .menu {
    position: fixed;
    top: calc((100vh - 740px) / 2);
    left: calc((100vw - 700px) / 2);
    z-index: 1000;
    width: 700px;
    height: 740px;
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.3);
  }
</style>
