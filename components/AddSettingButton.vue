<template>
  <button type="button" class="button ripple" @click="addSetting(fileIndex)">
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 207.73 207.73" fill="#231815">
      <path
        d="M195.51,91.65H116.09V12.22c0-6.75-5.47-12.22-12.22-12.22s-12.22,5.47-12.22,12.22V91.65H12.22c-6.75,0-12.22,5.47-12.22,12.22s5.47,12.22,12.22,12.22H91.65v79.43c0,6.75,5.47,12.22,12.22,12.22s12.22-5.47,12.22-12.22V116.09h79.43c6.75,0,12.22-5.47,12.22-12.22s-5.47-12.22-12.22-12.22Z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
  const { addSetting } = useAddSetting();

  interface Props {
    fileIndex: number;
  }

  defineProps<Props>();
</script>

<style lang="scss" scoped>
  .button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-left: 41.3%;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: var(--color5);
    transition: background-color 0.18s;

    @include hover() {
      background-color: var(--color6);
    }

    .icon {
      width: 20px;
      transition: fill 0.18s;
      fill: var(--white);
    }

    &:active {
      background-color: var(--color13);
    }
  }
</style>
