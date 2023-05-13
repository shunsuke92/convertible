<template>
  <div v-if="getSuccess(fileIndex, settingIndex)" class="success-message">
    <svg
      class="success-icon"
      width="542"
      height="542"
      viewBox="0 0 542 542"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="271" cy="271" r="271" fill="#30a13f" />
      <path
        d="M424.988 153L241.686 319.808L164.453 230.053L98 282.89L240.462 422L444 173.542L424.988 153Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
  const { inputFiles } = useInputFiles();
  const { isBatchSetting } = useIsBatchSetting();

  interface Props {
    settingIndex: number;
    fileIndex: number;
  }

  defineProps<Props>();

  const getSuccess = computed(() => {
    return function (index: number, index2: number) {
      if (isBatchSetting.value) {
        const length = inputFiles.value.length;
        return inputFiles.value[length - 1][index2].outputImage;
      } else {
        return inputFiles.value[index][index2].outputImage;
      }
    };
  });
</script>

<style lang="scss" scoped>
  .success-message {
    position: absolute;
    top: 0;
    left: calc(100% + 7px);
    display: flex;
    align-items: center;
    width: 30px;
    height: 100%;

    @include responsive(xs) {
    }
    @include responsive(sm) {
      left: calc(100% + 14px);
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

  .success-icon {
    width: 16px;
    height: 16px;
  }
</style>
