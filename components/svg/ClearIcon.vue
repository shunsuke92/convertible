<template>
  <svg
    class="icon"
    :style="getIconStyle"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 156 153.78"
    fill="#231815"
  >
    <path
      d="M151.77,129.15l-53.36-53.36,51.16-51.16c5.64-5.64,5.64-14.77,0-20.4s-14.77-5.64-20.4,0l-51.16,51.16L26.84,4.23C21.21-1.41,12.08-1.41,6.44,4.23,.8,9.86,.8,19,6.44,24.63l51.16,51.16L4.23,129.15c-5.64,5.64-5.64,14.77,0,20.41,2.82,2.82,6.51,4.23,10.2,4.23s7.38-1.41,10.2-4.23l53.37-53.36,53.36,53.36c2.82,2.82,6.51,4.23,10.2,4.23s7.38-1.41,10.2-4.23c5.64-5.64,5.64-14.77,0-20.41Z"
    />
  </svg>
</template>

<script setup lang="ts">
  const props = defineProps({
    width: {
      type: String,
      required: false,
      default: '8px',
    },
  });

  const getIconStyle = computed(() => {
    return {
      width: props.width,
      height: props.width,
    };
  });
</script>

<style lang="scss" scoped>
  .icon {
    fill: var(--primary700);
    .dark-mode & {
      fill: var(--gray300);
    }
  }
</style>
