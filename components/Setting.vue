<template>
  <SettingWrapper v-if="windowWidth >= 992">
    <SettingValue type="before" :setting="setting" />
    <SettingArrow />
    <SettingValue type="after" :setting="setting" />
    <SettingButtonWithLeftBar @click="openEditor(fileIndex, settingIndex)" />
    <SettingDeleteButton :fileIndex="fileIndex" :settingIndex="settingIndex" />
    <SettingSuccessIcon :fileIndex="fileIndex" :settingIndex="settingIndex" />
  </SettingWrapper>
  <SettingWrapper v-else-if="windowWidth >= 576">
    <Stack0>
      <Stack8 direction="column">
        <SettingValue type="before" :setting="setting" />
        <SettingValue type="after" :setting="setting" />
      </Stack8>
      <SettingButtonWithLeftBar @click="openEditor(fileIndex, settingIndex)" />
    </Stack0>
    <SettingDeleteButton :fileIndex="fileIndex" :settingIndex="settingIndex" />
    <SettingSuccessIcon :fileIndex="fileIndex" :settingIndex="settingIndex" />
  </SettingWrapper>
  <SettingWrapper v-else>
    <Stack0>
      <Stack12 direction="column" align-items="center">
        <SettingValue type="before" :setting="setting" />
        <SettingArrow type="bottom" />
        <SettingValue type="after" :setting="setting" />
      </Stack12>
      <SettingButtonWithLeftBar @click="openEditor(fileIndex, settingIndex)" />
    </Stack0>
    <SettingDeleteButton :fileIndex="fileIndex" :settingIndex="settingIndex" />
    <SettingSuccessIcon :fileIndex="fileIndex" :settingIndex="settingIndex" />
  </SettingWrapper>
</template>

<script setup lang="ts">
  import { InputFiles } from '../types/index';

  const { openEditor } = useOpenEditor();

  interface Props {
    setting: InputFiles;
    settingIndex: number;
    fileIndex: number;
  }

  defineProps<Props>();

  const { windowWidth } = useWindowWidth();
</script>

<style lang="scss" scoped></style>
