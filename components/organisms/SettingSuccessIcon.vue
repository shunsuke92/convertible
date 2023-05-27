<template>
  <div v-if="getSuccess(fileIndex, settingIndex)" class="success-message">
    <SuccessIcon />
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
</style>
