<template>
  <Stack16
    direction="column"
    alignItems="center"
    justifyContent="center"
    class="drop-area"
    :class="getClass"
    @dragenter="dragEnter"
    @dragleave="dragLeave"
    @dragover.prevent
    @drop.prevent="handleDrop"
  >
    <svg
      class="icon"
      :class="{ hide: isUploaded }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 308.47 370.52"
      fill="#231815"
    >
      <path
        d="M308.47,101.7c-.02-.52-.07-1.05-.16-1.56v-9.22c0-3.37-1.34-6.61-3.72-9L226.39,3.73c-2.39-2.38-5.62-3.73-8.99-3.73H29.57C13.25,.02,.02,13.25,0,29.57V340.95c.02,16.32,13.25,29.55,29.57,29.57h249.17c16.32-.02,29.55-13.25,29.57-29.57V103.26c.09-.52,.14-1.04,.16-1.57m-32.83-12.72h-61.09V27.88l61.09,61.09Zm3.1,256.1H29.57c-2.27,0-4.11-1.84-4.11-4.11V29.57c0-2.27,1.84-4.11,4.11-4.11H189.09V101.68c0,7.03,5.69,12.73,12.72,12.73h81.04v226.54c0,2.27-1.84,4.11-4.11,4.11"
      />
      <path
        d="M197.43,201.89h-38.39v-38.39c0-4.54-3.68-8.23-8.23-8.23s-8.23,3.68-8.23,8.23v38.39h-38.39c-4.54,0-8.23,3.68-8.23,8.23s3.68,8.23,8.23,8.23h38.39v38.39c0,4.54,3.68,8.23,8.23,8.23s8.23-3.68,8.23-8.23v-38.39h38.39c4.54,0,8.23-3.68,8.23-8.23s-3.68-8.23-8.23-8.23Z"
      />
    </svg>
    <Stack0 direction="column" alignItems="center">
      <p class="text">アップロードする画像ファイルをドラッグ＆ドロップします。</p>
      <p class="sub-text">対応ファイル：JPEG / PNG / GIF / WebP / AVIF</p>
    </Stack0>
    <input
      id="upload"
      class="upload"
      type="file"
      :accept="SUPPORT_FORMAT.join(',')"
      multiple
      @change="handleChange"
    />
    <label for="upload" class="upload-label">ファイルを選択</label>
  </Stack16>
</template>

<script setup lang="ts">
  const isEnter = ref(false);
  const { SUPPORT_FORMAT } = useConstant();
  const { inputFiles } = useInputFiles();

  const { createInputFile } = useCreateInputFile();

  // eslint-disable-next-line
  const dragEnter = (event: any) => {
    // HACK: ドロップエリア内でのイベントは無視する
    if (
      event.fromElement === null ||
      (event.fromElement.className !== 'main' &&
        event.fromElement.className !== 'container' &&
        event.fromElement.className !== 'attention' &&
        event.fromElement.className !== 'heading' &&
        event.fromElement.className !== 'text' &&
        event.fromElement.className !== 'title')
    )
      return;
    isEnter.value = true;
  };

  // eslint-disable-next-line
  const dragLeave = (event: any) => {
    // HACK: ドロップエリア内でのイベントは無視する
    if (
      event.fromElement === null ||
      (event.fromElement.className !== 'main' &&
        event.fromElement.className !== 'container' &&
        event.fromElement.className !== 'attention' &&
        event.fromElement.className !== 'heading' &&
        event.fromElement.className !== 'text' &&
        event.fromElement.className !== 'title')
    )
      return;
    isEnter.value = false;
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

  const isUploaded = computed(() => {
    return inputFiles.value.length > 0;
  });

  const getClass = computed(() => {
    return { enter: isEnter.value, small: isUploaded.value };
  });
</script>

<style lang="scss" scoped>
  .drop-area {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    padding-top: 120px;
    padding-bottom: 120px;
    width: 100%;
    border: 3px var(--color5) solid;
    border-radius: 8px;
    background-color: var(--color3);
    transition: padding 0.5s, background-color 0.2s;
    .icon {
      height: 64px;
      transition: height 0.5s, opacity 0.2s, margin 0.5s;
      fill: var(--color5);
      &.hide {
        margin-bottom: 0;
        height: 0;
        opacity: 0;
      }
    }
    .text-outer {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
    }
    .text {
      color: var(--gray10);
      font-weight: 400;
      font-size: var(--font-size-lg);
      pointer-events: none;
    }

    .sub-text {
      color: var(--gray10);
      font-weight: 300;
      font-size: var(--font-size-sm);
      pointer-events: none;
    }
    &.enter {
      background-color: var(--color4);
    }
    &.small {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }

  .upload-label {
    display: inline;
    margin-right: 6px;
    padding: 6px 12px;
    border-radius: 4px;
    background-color: var(--color5);
    color: var(--white);
    font-size: var(--font-size-md);
    cursor: pointer;
    transition: background-color 0.18s;

    @include hover() {
      background-color: var(--color6);
    }
    &:active {
      background-color: var(--color13);
    }
  }

  .upload {
    display: none;
  }
</style>
