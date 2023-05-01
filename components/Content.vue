<template>
  <div class="wrapper" :style="getStyle">
    <ImageViewer :file="file[0]" />
    <Stack10 direction="column" :id="`content${fileIndex}`">
      <FileNameViewer :file="file[0]" />
      <SettingViewer :file="file" :file-index="fileIndex" />
    </Stack10>
    <Stack12 direction="column" style="margin-top: 32px">
      <ConversionButton :file-index="fileIndex" />
      <DownloadButton :file-index="fileIndex" />
    </Stack12>
    <ContentDeleteButton :file-index="fileIndex" />
  </div>
</template>

<script setup lang="ts">
  import { InputFiles } from '../types/index';

  interface Props {
    file: readonly InputFiles[];
    fileIndex: number;
  }

  const props = defineProps<Props>();

  // コンテンツボックスの高さの変更をアニメーションする
  const height = ref(0);
  const resizeObserver = ref<ResizeObserver>();
  const observerTarget = ref<Element>();

  onMounted(() => {
    const element = document.getElementById(`content${props.fileIndex}`);
    if (element === null) return;
    resizeObserver.value = new ResizeObserver((entries) => {
      setHeight(element);
      observerTarget.value = entries[0].target;
    });
    resizeObserver.value.observe(element);
  });

  onUnmounted(() => {
    if (observerTarget.value !== undefined && resizeObserver.value !== undefined) {
      resizeObserver.value.unobserve(observerTarget.value);
    }
  });

  const setHeight = (element: Element) => {
    height.value = element?.clientHeight ?? 0;
  };

  const getStyle = computed(() => {
    if (height.value === 0) {
      return undefined;
    } else {
      return { height: `${height.value + 30}px` };
    }
  });
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
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
