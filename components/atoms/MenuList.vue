<template>
  <div class="menu-list">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .menu-list {
    overflow: auto;
    padding: 20px;
    width: 100%;
    height: calc(100% - 110px);
    & > :not(:last-child) {
      margin-bottom: 20px;
    }
  }
</style>
