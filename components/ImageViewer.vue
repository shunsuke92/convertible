<template>
  <div class="image-viewer" :class="getClass">
    <div class="image-outer" :style="getStyle">
      <button type="button" :disabled="!getMultiImage" class="button" @click="openImageList">
        <Image class="image" :file="file" />
        <svg
          v-if="getMultiImage"
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 350.03 294.47"
          fill="#231815"
        >
          <path
            d="M331.53,67.78h-35.1v20h33.61v186.69H87.78v-33.61h-20v35.1c0,10.2,8.3,18.51,18.51,18.51h245.24c10.2,0,18.51-8.3,18.51-18.51V86.29c0-10.21-8.3-18.51-18.51-18.51Z"
          />
          <rect width="282.25" height="226.69" rx="18.51" ry="18.51" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { InputFiles } from '../types/index';

  const { inputFiles } = useInputFiles();
  const { isBatchSetting } = useIsBatchSetting();
  const { isInputAnimating } = useIsInputAnimating();
  const { openImageList } = useOpenImageList();

  interface Props {
    file: InputFiles;
    width?: `${number}px`;
    height?: `${number}px`;
  }

  const props = withDefaults(defineProps<Props>(), {
    width: '200px',
    height: '200px',
  });

  const getClass = computed(() => {
    return { 'add-image-animation': isInputAnimating.value };
  });

  const getStyle = computed(() => {
    if (props.file.originalWidth >= props.file.originalHeight) {
      return { width: '100%' };
    } else {
      return { height: '100%' };
    }
  });

  const getMultiImage = computed(() => {
    return inputFiles.value.length > 1 && isBatchSetting.value;
  });
</script>

<style lang="scss" scoped>
  .image-viewer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: v-bind(width);
    height: v-bind(height);
    border-radius: 8px;
    background-color: var(--white);
    &.add-image-animation {
      animation: add-image 0.8s both;

      @keyframes add-image {
        0%,
        100% {
          transform: translateX(0%);
          transform-origin: 50% 50%;
        }
        15% {
          transform: translateX(-30px) rotate(-6deg);
        }
        30% {
          transform: translateX(15px) rotate(6deg);
        }
        45% {
          transform: translateX(-15px) rotate(-3.6deg);
        }
        60% {
          transform: translateX(9px) rotate(2.4deg);
        }
        75% {
          transform: translateX(-6px) rotate(-1.2deg);
        }
      }
    }
  }

  .image-outer {
    position: relative;
  }

  .button {
    display: flex;
    width: inherit;
    height: inherit;
    .image {
      width: inherit;
      height: inherit;
    }
  }

  .icon {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 16px;
    fill: var(--white);
  }
</style>
