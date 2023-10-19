<template>
  <button type="button" class="setting-button" @click="handleClick">
    <SettingIcon />
  </button>
</template>

<script setup lang="ts">
  const emit = defineEmits<{ (e: 'click', value: MouseEvent): void }>();
  const handleClick = (event: MouseEvent) => {
    emit('click', event);
  };
</script>

<style lang="scss" scoped>
  .setting-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 29px;
    height: 100%;
    border-radius: 5px;

    @include hover() {
      background-color: var(--primary100);
      .dark-mode & {
        background-color: var(--gray500);
      }
    }
  }
</style>
