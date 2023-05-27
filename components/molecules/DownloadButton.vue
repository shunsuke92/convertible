<template>
  <Button
    type="fill"
    click-reaction="ripple"
    :disabled="getDisabled(fileIndex)"
    @click="download('single', fileIndex)"
  >
    ダウンロード
  </Button>
</template>

<script setup lang="ts">
  interface Props {
    fileIndex: number;
  }

  defineProps<Props>();

  const { inputFiles } = useInputFiles();
  const { isConvertingSingle } = useIsConvertingSingle();
  const { isConvertingAll } = useIsConvertingAll();
  const { download } = useDownload();

  const getDisabled = computed(() => {
    return function (index: number) {
      const settingNum = inputFiles.value[index].length;
      let count = 0;
      for (let i = 0; i < settingNum; i++) {
        if (inputFiles.value[index][i].outputImage) count++;
      }
      return !(count > 0 && !isConvertingSingle.value && !isConvertingAll.value);
    };
  });
</script>

<style lang="scss" scoped></style>
