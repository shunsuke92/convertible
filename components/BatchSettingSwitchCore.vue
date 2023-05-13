<template>
  <Switch
    :on="isBatchSetting"
    text-position="right"
    :disabled="isConverting"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot></slot>
  </Switch>
</template>

<script setup lang="ts">
  const { isBatchSetting, changeIsBatchSetting } = useIsBatchSetting();
  const { isConverting } = useIsConverting();
  const { inputFiles } = useInputFiles();
  const { setFirstSettingToAll } = useSetFirstSettingToAll();
  const { updateIsMouseEnterSwitch } = useIsMouseEnterSwitch();
  const { clearProgressBar } = useClearProgressBar();

  const handleClick = (value: boolean) => {
    changeIsBatchSetting();
    if (!value) {
      clearProgressBar();
      setFirstSettingToAll();
    }
  };

  const handleMouseEnter = () => {
    if (inputFiles.value.length >= 2) {
      updateIsMouseEnterSwitch(true);
    }
  };

  const handleMouseLeave = () => {
    updateIsMouseEnterSwitch(false);
  };
</script>

<style lang="scss" scoped></style>
