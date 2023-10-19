<template>
  <svg
    class="setting-arrow"
    :style="getStyle"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 451.47 324.84"
  >
    <defs>
      <linearGradient
        id="arrow"
        x1="0"
        y1="162.42"
        x2="451.47"
        y2="162.42"
        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset="0"
          :stop-color="$colorMode.value === 'light' ? 'var(--primary50)' : '#4b5563'"
        />
        <stop
          offset=".63"
          :stop-color="$colorMode.value === 'light' ? 'var(--primary500)' : '#9ca3af'"
        />
        <stop
          offset="1"
          :stop-color="$colorMode.value === 'light' ? 'var(--primary600)' : '#d1d5db'"
        />
      </linearGradient>
    </defs>
    <path
      d="M451.47,162.42l-207.46,162.42V0l207.46,162.42ZM162.68,234.11h60.23V90.72h-60.23V234.11Zm-81.34,0h60.23V90.72h-60.23V234.11Zm-81.34,0H60.23V90.72H0V234.11Z"
      style="fill: url(#arrow)"
    />
  </svg>
</template>

<script setup lang="ts">
  interface Props {
    type?: 'top' | 'bottom' | 'left' | 'right';
  }
  const props = defineProps<Props>();

  const getStyle = computed(() => {
    let num;
    if (props.type === 'top') num = -90;
    else if (props.type === 'right') num = 0;
    else if (props.type === 'bottom') num = 90;
    else if (props.type === 'left') num = 180;
    else num = num = 0;
    return {
      transform: `rotate(${num}deg)`,
    };
  });
</script>

<style lang="scss" scoped>
  .setting-arrow {
    width: 20px;

    @include responsive(xs) {
    }
    @include responsive(sm) {
      width: 28px;
    }
    @include responsive(md) {
    }
    @include responsive(lg) {
    }
    @include responsive(xl) {
    }
    @include responsive(xxl) {
    }
  }
</style>
