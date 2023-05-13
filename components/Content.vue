<template>
  <div v-if="windowWidth >= 1200" class="wrapper" :style="getStyle">
    <Stack0 align-items="flex-start" justify-content="space-between">
      <ImageViewer :file="file[0]" :id="`content-image-${fileIndex}`" />
      <Stack10 direction="column" :id="`content-setting-${fileIndex}`">
        <FileNameViewer :file="file[0]" />
        <SettingViewer :file="file" :file-index="fileIndex" />
      </Stack10>
      <Stack12 direction="column" style="margin-top: 32px" :id="`content-button-${fileIndex}`">
        <ConversionButton :file-index="fileIndex" />
        <DownloadButton :file-index="fileIndex" />
      </Stack12>
      <ContentDeleteButton :file-index="fileIndex" />
    </Stack0>
  </div>
  <div v-else-if="windowWidth >= 768" class="wrapper" :style="getStyle">
    <Stack0 align-items="flex-start" justify-content="space-between">
      <Stack16 direction="column">
        <ImageViewer :file="file[0]" :id="`content-image-${fileIndex}`" />
        <Stack12 direction="column" :id="`content-button-${fileIndex}`">
          <ConversionButton :file-index="fileIndex" />
          <DownloadButton :file-index="fileIndex" />
        </Stack12>
      </Stack16>
      <Stack10 direction="column" :id="`content-setting-${fileIndex}`">
        <FileNameViewer :file="file[0]" />
        <SettingViewer :file="file" :file-index="fileIndex" />
      </Stack10>
      <ContentDeleteButton :file-index="fileIndex" />
    </Stack0>
  </div>
  <div v-else-if="windowWidth >= 576" class="wrapper" :style="getStyle">
    <Stack16 align-items="center" justify-content="space-between" direction="column">
      <Stack16 direction="row" :id="`content-image-${fileIndex}`">
        <Stack8 direction="column">
          <FileNameViewer :file="file[0]" />
          <ImageViewer :file="file[0]" width="370px" height="370px" />
        </Stack8>
        <Stack12
          direction="column"
          style="margin-top: 30px; margin-left: 20px"
          :id="`content-button-${fileIndex}`"
        >
          <ConversionButton :file-index="fileIndex" />
          <DownloadButton :file-index="fileIndex" />
        </Stack12>
      </Stack16>
      <Stack10 direction="column" :id="`content-setting-${fileIndex}`">
        <SettingViewer :file="file" :file-index="fileIndex" />
      </Stack10>
      <ContentDeleteButton :file-index="fileIndex" />
    </Stack16>
  </div>
  <div v-else class="wrapper" :style="getStyle">
    <Stack16 align-items="flex-start" justify-content="space-between" direction="column">
      <Stack16 direction="row">
        <Stack8 direction="column" :id="`content-image-${fileIndex}`">
          <FileNameViewer :file="file[0]" />
          <ImageViewer :file="file[0]" width="336px" height="336px" />
          <Stack12 direction="column" :id="`content-button-${fileIndex}`">
            <ConversionButton :file-index="fileIndex" />
            <DownloadButton :file-index="fileIndex" />
          </Stack12>
        </Stack8>
      </Stack16>
      <Stack10 direction="column" :id="`content-setting-${fileIndex}`">
        <SettingViewer :file="file" :file-index="fileIndex" />
      </Stack10>
      <ContentDeleteButton :file-index="fileIndex" />
    </Stack16>
  </div>
</template>

<script setup lang="ts">
  import { InputFiles } from '../types/index';

  interface Props {
    file: readonly InputFiles[];
    fileIndex: number;
  }

  const props = defineProps<Props>();

  const { windowWidth } = useWindowWidth();

  // コンテンツボックスの高さの変更をアニメーションする
  const imageHeight = ref(0);
  const settingHeight = ref(0);
  const buttonHeight = ref(0);
  const resizeObserver = ref<ResizeObserver>();

  onMounted(() => {
    const imageElement = document.getElementById(`content-image-${props.fileIndex}`);
    const settingElement = document.getElementById(`content-setting-${props.fileIndex}`);
    const buttonElement = document.getElementById(`content-button-${props.fileIndex}`);
    if (imageElement === null || settingElement === null || buttonElement === null) return;
    resizeObserver.value = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target.id.includes('content-image')) {
          imageHeight.value = entry.contentRect.height;
        } else if (entry.target.id.includes('content-setting')) {
          settingHeight.value = entry.contentRect.height;
        } else if (entry.target.id.includes('content-button')) {
          buttonHeight.value = entry.contentRect.height;
        }
      }
    });
    resizeObserver.value.observe(imageElement);
    resizeObserver.value.observe(settingElement);
    resizeObserver.value.observe(buttonElement);
  });

  onUnmounted(() => {
    if (resizeObserver.value !== undefined) {
      resizeObserver.value.disconnect();
    }
  });

  const getStyle = computed(() => {
    if (imageHeight.value === 0 || settingHeight.value === 0 || buttonHeight.value === 0) {
      return undefined;
    } else if (windowWidth.value < 576) {
      return {
        height: `${imageHeight.value + 16 + settingHeight.value + 30}px`,
      };
    } else if (windowWidth.value < 768) {
      return {
        height: `${imageHeight.value + 16 + settingHeight.value + 30}px`,
      };
    } else if (windowWidth.value < 1200) {
      return {
        height: `${
          Math.max(imageHeight.value + buttonHeight.value + 16, settingHeight.value) + 30
        }px`,
      };
    } else {
      return { height: `${settingHeight.value + 30}px` };
    }
  });
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    margin-bottom: 20px;
    padding: 10px 10px 20px 10px;
    min-height: 224px;
    width: 100%;
    border: 2px var(--color5) solid;
    border-radius: 8px;
    background-color: var(--color2);
    transition: height 0.5s ease;
  }
</style>
