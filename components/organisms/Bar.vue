<template>
  <div class="bar" :class="getClass" :style="getStyle">
    <div class="bar-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    type: 'top' | 'bottom';
  }

  const props = defineProps<Props>();

  const { paddingRight } = usePaddingRight();

  const getClass = computed(() => {
    return {
      top: props.type === 'top',
      bottom: props.type === 'bottom',
    };
  });

  const getStyle = computed(() => {
    return {
      paddingRight: paddingRight.value,
    };
  });
</script>

<style lang="scss" scoped>
  .bar {
    position: fixed;
    left: 0;
    z-index: 200;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90px;
    background-color: var(--color1);
    &.top {
      top: 0;
      align-items: flex-end;
    }
    &.bottom {
      bottom: 0;
      align-items: flex-start;
    }
  }

  .bar-inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    width: 360px;
    height: 70px;
    /* border-top: 2px var(--gray0) solid; */
    /* border-radius: 0 0 10px 10px; */
    background-color: var(--white);

    @include responsive(xs) {
    }
    @include responsive(sm) {
      width: 560px;
    }
    @include responsive(md) {
      justify-content: space-between;
      width: 750px;
    }
    @include responsive(lg) {
      width: 970px;
    }
    @include responsive(xl) {
      width: 1200px;
    }
    @include responsive(xxl) {
    }

    .top & {
      border-bottom: 2px var(--gray0) solid;
      border-radius: 10px 10px 0 0;
    }

    .bottom & {
      border-top: 2px var(--gray0) solid;
      border-radius: 0 0 10px 10px;
    }
  }
</style>
