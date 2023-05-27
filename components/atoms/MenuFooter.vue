<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding-right: 18px;
    padding-left: 18px;
    width: 100%;
    height: 60px;
  }
</style>
