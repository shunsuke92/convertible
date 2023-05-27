<template>
  <div class="image-area">
    <div class="image-outer" :style="getImageOuterStyle">
      <Image class="image" :style="getImageStyle" :file="editorTargetFile()" />
      <div class="mark" :style="getMarkStyle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { EditorSetttingValue } from '~/types/index';

  const IMAGE_SIZE = 330;

  interface Props {
    data: EditorSetttingValue;
  }

  const props = defineProps<Props>();

  const { editorTargetFile } = useEditorTargetFile();

  const getImageOuterStyle = computed(() => {
    const originalWidth = editorTargetFile().originalWidth;
    const originalHeight = editorTargetFile().originalHeight;
    let width;
    let height;
    if (originalWidth > originalHeight) {
      width = originalWidth * (IMAGE_SIZE / originalWidth);
      height = originalHeight * (IMAGE_SIZE / originalWidth);
    } else {
      width = originalWidth * (IMAGE_SIZE / originalHeight);
      height = originalHeight * (IMAGE_SIZE / originalHeight);
    }
    return {
      width: `${width}px`,
      height: `${height}px`,
    };
  });

  const getImageStyle = computed(() => {
    if (props.data.fit === 'cover') {
      let width;
      let height;
      const originalWidth = editorTargetFile().originalWidth;
      const originalHeight = editorTargetFile().originalHeight;
      if (originalWidth > originalHeight) {
        width = originalWidth * (IMAGE_SIZE / originalWidth);
        height = originalHeight * (IMAGE_SIZE / originalWidth);
      } else {
        width = originalWidth * (IMAGE_SIZE / originalHeight);
        height = originalHeight * (IMAGE_SIZE / originalHeight);
      }

      return {
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: '100%',
        maxHeight: '100%',
      };
    } else {
      let baseWidth;
      let baseHeight;
      const originalWidth = editorTargetFile().originalWidth;
      const originalHeight = editorTargetFile().originalHeight;
      const settingWidth = props.data.width ?? editorTargetFile().originalWidth;
      const settingHeight = props.data.height ?? editorTargetFile().originalHeight;

      if (originalWidth > originalHeight) {
        baseWidth = IMAGE_SIZE;
        baseHeight = IMAGE_SIZE * (originalHeight / originalWidth);
      } else {
        baseWidth = IMAGE_SIZE * (originalWidth / originalHeight);
        baseHeight = IMAGE_SIZE;
      }
      if (originalWidth * settingHeight === originalHeight * settingWidth) {
        return {
          width: `100%`,
          height: `100%`,
          objectFit: props.data.fit,
          objectPosition: props.data.position,
          backgroundColor: props.data.background,
        };
      } else if (originalWidth * settingHeight > originalHeight * settingWidth) {
        const width = baseWidth * (settingWidth / originalWidth / (settingHeight / originalHeight));

        return {
          width: `${width}px`,
          height: `100%`,
          objectFit: props.data.fit,
          objectPosition: props.data.position,
          backgroundColor: props.data.background,
        };
      } else {
        const height =
          baseHeight * (settingHeight / originalHeight / (settingWidth / originalWidth));

        return {
          width: `100%`,
          height: `${height}px`,
          objectFit: props.data.fit,
          objectPosition: props.data.position,
          backgroundColor: props.data.background,
        };
      }
    }
  });

  const getMarkStyle = computed(() => {
    let baseWidth;
    let baseHeight;
    const originalWidth = editorTargetFile().originalWidth;
    const originalHeight = editorTargetFile().originalHeight;
    const settingWidth = props.data.width ?? editorTargetFile().originalWidth;
    const settingHeight = props.data.height ?? editorTargetFile().originalHeight;
    if (originalWidth > originalHeight) {
      baseWidth = IMAGE_SIZE;
      baseHeight = IMAGE_SIZE * (originalHeight / originalWidth);
    } else {
      baseWidth = IMAGE_SIZE * (originalWidth / originalHeight);
      baseHeight = IMAGE_SIZE;
    }
    if (originalWidth * settingHeight === originalHeight * settingWidth) {
      return {
        width: `100%`,
        height: `100%`,
        border: '1px red solid',
      };
    } else if (originalWidth * settingHeight > originalHeight * settingWidth) {
      const width = baseWidth * (settingWidth / originalWidth / (settingHeight / originalHeight));
      const margin = baseWidth - width;

      if (
        props.data.position === 'left' ||
        props.data.fit === 'contain' ||
        props.data.fit === 'fill'
      ) {
        return {
          width: `${width}px`,
          height: `100%`,
          border: '1px red solid',
        };
      } else if (props.data.position === 'right') {
        return {
          width: `${width}px`,
          height: `100%`,
          border: '1px red solid',
          marginLeft: `${margin}px`,
        };
      } else {
        return {
          width: `${width}px`,
          height: `100%`,
          border: '1px red solid',
          marginLeft: `${margin / 2}px`,
        };
      }
    } else {
      const height = baseHeight * (settingHeight / originalHeight / (settingWidth / originalWidth));
      const margin = baseHeight - height;

      if (
        props.data.position === 'top' ||
        props.data.fit === 'contain' ||
        props.data.fit === 'fill'
      ) {
        return {
          width: `100%`,
          height: `${height}px`,
          border: '1px red solid',
        };
      } else if (props.data.position === 'bottom') {
        return {
          width: `100%`,
          height: `${height}px`,
          border: '1px red solid',
          marginTop: `${margin}px`,
        };
      } else {
        return {
          width: `100%`,
          height: `${height}px`,
          border: '1px red solid',
          marginTop: `${margin / 2}px`,
        };
      }
    }
  });
</script>

<style lang="scss" scoped>
  .image-area {
    position: relative;
    display: flex;
    justify-content: center;

    @include responsive(xs) {
    }
    @include responsive(sm) {
    }
    @include responsive(md) {
      width: 50%;
    }
    @include responsive(lg) {
    }
    @include responsive(xl) {
    }
    @include responsive(xxl) {
    }
  }

  .image-outer {
    position: relative;
  }

  .mark {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
