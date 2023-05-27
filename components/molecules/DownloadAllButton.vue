<template>
  <Button
    click-reaction="ripple"
    :width="windowWidth >= 768 ? '160px' : windowWidth >= 576 ? '252px' : '162px'"
    height="40px"
    type="fill"
    :disabled="getDisabled"
    @click="download('all')"
  >
    一括ダウンロード
  </Button>
</template>

<script setup lang="ts">
  const { isConvertingSingle } = useIsConvertingSingle();
  const { isConvertingAll } = useIsConvertingAll();
  const { inputFiles } = useInputFiles();
  const { download } = useDownload();
  const { windowWidth } = useWindowWidth();

  const getDisabled = computed(() => {
    const fileNum = inputFiles.value.length;
    let count = 0;
    for (let i = 0; i < fileNum; i++) {
      const settingNum = inputFiles.value[i].length;
      for (let j = 0; j < settingNum; j++) {
        if (inputFiles.value[i][j].outputImage) count++;
      }
    }
    return !(count > 0 && !isConvertingSingle.value && !isConvertingAll.value);
  });
</script>

<style lang="scss" scoped></style>
