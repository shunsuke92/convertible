<template>
  <div class="setting-button-outer">
    <SettingButton class="setting-button" @click="handleClick" />
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits<{ (e: 'click', value: MouseEvent): void }>();
  const handleClick = (event: MouseEvent) => {
    emit('click', event);
  };
</script>

<style lang="scss" scoped>
  .setting-button-outer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .setting-button {
    margin-left: 10px;

    @include responsive(xs) {
    }
    @include responsive(sm) {
      margin-left: 20px;
    }
    @include responsive(md) {
    }
    @include responsive(lg) {
    }
    @include responsive(xl) {
    }
    @include responsive(xxl) {
    }

    &::before {
      position: absolute;
      top: 0;
      left: -6px;
      width: 1px;
      height: 100%;
      background-color: var(--primary700);
      content: '';

      @include responsive(xs) {
      }
      @include responsive(sm) {
        left: -14px;
      }
      @include responsive(md) {
      }
      @include responsive(lg) {
      }
      @include responsive(xl) {
      }
      @include responsive(xxl) {
      }

      .dark-mode & {
        background-color: var(--gray300);
      }
    }
  }
</style>
