<template>
  <svg
    class="icon"
    :style="getStyle"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 447.88 401.54"
    fill="#231815"
  >
    <path
      d="M442.56,188.72L240.41,4.25c-4.78-4.34-11.68-5.46-17.58-2.85-5.9,2.61-9.72,8.47-9.72,14.92V94.42H16.19c-8.93,0-16.19,7.26-16.19,16.19v180.32c0,8.93,7.26,16.19,16.19,16.19H213.11v78.1c0,6.46,3.81,12.31,9.72,14.92,2.12,.94,4.36,1.39,6.59,1.39,3.99,0,7.94-1.46,11.01-4.26l202.1-184.43c3.4-3.09,5.34-7.49,5.34-12.08s-1.95-8.99-5.32-12.05Zm-197.44,160.97v-74.57H32V126.42H245.11V51.86l163.18,148.92-163.18,148.92Z"
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
    else num = num = -90;
    return {
      transform: `rotate(${num}deg)`,
    };
  });
</script>

<style lang="scss" scoped>
  .icon {
    width: 24px;
    fill: var(--color11);
  }
</style>
