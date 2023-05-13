<template>
  <DeleteButton
    top="-5px"
    right="-5px"
    width="18px"
    icon-width="8px"
    :disabled="isConverting"
    @click="handleClick(fileIndex, settingIndex)"
    @mouseenter="handleMouseEnter(fileIndex)"
    @mouseleave="handleMouseLeave()"
  />
</template>

<script setup lang="ts">
  const { inputFiles, clearInputFiles, deleteInputFiles } = useInputFiles();
  const { isBatchSetting } = useIsBatchSetting();
  const { isConverting } = useIsConverting();
  const { updateIsMouseEnterDeleteButton } = useIsMouseEnterDeleteButton();

  interface Props {
    settingIndex: number;
    fileIndex: number;
  }

  defineProps<Props>();

  const handleClick = (fileIndex: number, settingIndex: number) => {
    deleteSetting(fileIndex, settingIndex);
    updateIsMouseEnterDeleteButton(false);
  };

  const handleMouseEnter = (fileIndex: number) => {
    if (inputFiles.value[fileIndex].length === 1) {
      updateIsMouseEnterDeleteButton(true);
    }
  };
  const handleMouseLeave = () => {
    updateIsMouseEnterDeleteButton(false);
  };

  const deleteSetting = (fileIndex: number, settingIndex: number) => {
    if (isBatchSetting.value) {
      // 同一設定中のため、すべてのファイルを操作
      if (inputFiles.value[fileIndex].length === 1) {
        // 最後の設定ファイルのため、画像自体を削除
        clearInputFiles();
      } else {
        // 選択された設定ファイルを削除
        const length = inputFiles.value.length;
        for (let i = 0; i < length; i++) {
          deleteInputFiles(i, settingIndex);
        }
      }
    } else {
      if (inputFiles.value[fileIndex].length === 1) {
        deleteInputFiles(fileIndex);
      } else {
        deleteInputFiles(fileIndex, settingIndex);
      }
    }
  };
</script>

<style lang="scss" scoped></style>
