<template>
  <TransitionGroup tag="div" name="fade" style="width: 100%; position: relative">
    <Content
      v-for="(file, fileIndex) in getInputFiles"
      :key="file[0].fileId"
      :file="file"
      :file-index="fileIndex"
      :style="getStyle"
    />
  </TransitionGroup>
</template>

<script setup lang="ts">
  const { inputFiles } = useInputFiles();
  const { isBatchSetting } = useIsBatchSetting();
  const { isMouseEnterSwitch } = useIsMouseEnterSwitch();

  const getInputFiles = computed(() => {
    // 同一設定時は１番目の画像だけ返す
    return isBatchSetting.value
      ? inputFiles.value.length !== 0
        ? [inputFiles.value[0]]
        : []
      : inputFiles.value;
  });

  const getStyle = computed(() => {
    // 同一設定スイッチ押下での画像削除アニメーションにつくposition: absolute;を無効化するため
    // これがないと同一設定スイッチ押下時のアニメーションがうまく動かない
    if (isMouseEnterSwitch.value) {
      return { position: 'relative' };
    } else {
      return undefined;
    }
  });
</script>

<style lang="scss" scoped>
  .fade-move,
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .fade-leave-active {
    position: absolute;
  }
</style>
