<template>
  <Stack
    class="drop-area"
    :class="{ enter: isEnter, small: isUploaded }"
    @dragenter="handleDragEnter"
    @dragleave="handleDragLeave"
    @dragover.prevent
    @drop.prevent="handleDrop"
  >
    <Stack
      :spaceing="16"
      direction="column"
      alignItems="center"
      justifyContent="center"
      @dragenter.stop
      @dragleave.stop
    >
      <AddFileIcon
        style="transition: height 0.5s, opacity 0.2s, margin 0.5s"
        :class="{ hide: isUploaded }"
      />
      <Stack direction="column" alignItems="center">
        <Typography
          :color="$colorMode.value === 'light' ? 'gray600' : 'gray200'"
          font-size="lg"
          :font-weight="400"
          >ドラッグ＆ドロップで画像ファイルを追加する。</Typography
        >
        <Typography
          :color="$colorMode.value === 'light' ? 'gray600' : 'gray200'"
          font-size="sm"
          :font-weight="300"
          >対応ファイル：JPEG / PNG / GIF / WebP / AVIF</Typography
        >
      </Stack>
      <FileInputButton @change="handleChange" />
    </Stack>
  </Stack>
</template>

<script setup lang="ts">
  const isEnter = ref(false);
  const { inputFiles } = useInputFiles();
  const { createInputFile } = useCreateInputFile();
  const { setMatchMediaAddEventListener } = useSetMatchMediaAddEventListener();

  let dropEreaWidth = 0;
  let dropEreaHeight = 0;
  let dropEreaTop = 0;
  let dropEreaLeft = 0;

  onMounted(() => {
    setMatchMediaAddEventListener(setDropAreaSize);
    setDropAreaSize();
  });

  const isUploaded = computed(() => {
    return inputFiles.value.length > 0;
  });

  watch(isUploaded, () => {
    setTimeout(setDropAreaSize, 700);
  });

  const setDropAreaSize = () => {
    const elements = document.getElementsByClassName('drop-area');
    if (elements.length === 0) return;

    const clientRect = elements[0].getBoundingClientRect();
    dropEreaWidth = clientRect.width;
    dropEreaHeight = clientRect.height;
    dropEreaTop = clientRect.top;
    dropEreaLeft = clientRect.left;
  };

  // eslint-disable-next-line
  const isDropErea = (event: any, type: 'in' | 'out') => {
    const margin = type === 'in' ? 50 : -50;
    return (
      event.x + margin >= dropEreaLeft &&
      event.x - margin <= dropEreaLeft + dropEreaWidth &&
      event.y + margin >= dropEreaTop &&
      event.y - margin <= dropEreaTop + dropEreaHeight
    );
  };

  // eslint-disable-next-line
  const handleDragEnter = (event: any) => {
    if (isDropErea(event, 'in')) {
      isEnter.value = true;
    }
  };

  // eslint-disable-next-line
  const handleDragLeave = (event: any) => {
    if (!isDropErea(event, 'out')) {
      isEnter.value = false;
    }
  };

  // eslint-disable-next-line
  const handleDrop = (event: any) => {
    isEnter.value = false;
    // ドロップされたファイルを取得
    const files: File[] = [...event.dataTransfer?.files];
    if (files.length === 0) return;

    createInputFile(files);
  };

  // eslint-disable-next-line
  const handleChange = (event: any) => {
    isEnter.value = false;
    // ファイル選択されたファイルを取得
    const files: File[] = [...event.target?.files];
    if (files.length === 0) return;

    createInputFile(files);
  };
</script>

<style lang="scss" scoped>
  .drop-area {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    padding: 120px 20px;
    width: 100%;
    border: 3px var(--primary700) solid;
    border-radius: 8px;
    background-color: var(--primary100);
    transition: padding 0.5s, background-color 0.2s;

    &.enter {
      background-color: var(--primary200);
      .dark-mode & {
        background-color: var(--gray600);
      }
    }
    &.small {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    .dark-mode & {
      border-color: var(--gray500);
      background-color: var(--gray700);
    }
  }

  .hide {
    margin-bottom: 0;
    height: 0;
    opacity: 0;
  }
</style>
