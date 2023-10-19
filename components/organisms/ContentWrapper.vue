<template>
  <div class="wrapper" :style="getStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    fileIndex: number;
  }

  const props = defineProps<Props>();

  // コンテンツボックスの高さの変更をアニメーションする
  const contentInnerHeight = ref(0);
  const resizeObserver = ref<ResizeObserver>();

  onMounted(() => {
    setResizeObserver();
  });

  onUnmounted(() => {
    unsetResizeObserver();
  });

  const setResizeObserver = () => {
    const contentInnerElement = document.getElementById(`content-inner-${props.fileIndex}`);
    if (contentInnerElement === null) return;
    resizeObserver.value = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target.id.includes('content-inner')) {
          contentInnerHeight.value = entry.contentRect.height;
        }
      }
    });
    resizeObserver.value.observe(contentInnerElement);
  };

  const unsetResizeObserver = () => {
    if (resizeObserver.value !== undefined) {
      resizeObserver.value.disconnect();
    }
  };

  const getStyle = computed(() => {
    if (contentInnerHeight.value === 0) {
      return undefined;
    } else {
      return { height: `${contentInnerHeight.value + 24}px` };
    }
  });
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    margin-bottom: 20px;
    padding: 10px 10px 10px 10px;
    width: 100%;
    border: 2px var(--primary700) solid;
    border-radius: 8px;
    background-color: var(--primary50);
    transition: height 0.5s ease;
    .dark-mode & {
      border-color: var(--gray500);
      background-color: var(--gray700);
    }
  }
</style>
