<template>
  <div class="setting-contents">
    <div
      v-if="windowWidth < 992 && windowWidth >= 576"
      class="setting-type-mark"
      :class="type === 'before' ? 'before' : 'after'"
    >
      {{ type.toUpperCase() }}
    </div>
    <Stack8>
      <div class="setting-content format">
        <svg
          class="format-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 353.67 424.82"
          fill="#231815"
        >
          <path
            d="M353.67,116.6c0-.61-.11-1.2-.18-1.8v-10.57c0-3.87-1.54-7.59-4.27-10.32L259.57,4.27c-2.73-2.73-6.45-4.27-10.32-4.27H33.9C15.21,0,0,15.21,0,33.9V390.92c0,18.69,15.21,33.9,33.9,33.9H319.58c18.69,0,33.9-15.21,33.9-33.9V118.39c.07-.6,.18-1.17,.18-1.8Zm-37.64-14.59h-70.04V31.96l70.04,70.04Zm3.55,293.63H33.9c-2.6,0-4.71-2.12-4.71-4.72V33.9c0-2.6,2.12-4.71,4.71-4.71H216.8V116.6c0,8.07,6.53,14.6,14.59,14.6h92.91V390.92c0,2.6-2.12,4.72-4.72,4.72Z"
          />
        </svg>
        <p class="text" :class="getChangeClass(setting.originalFormat, setting.settingFormat)">
          {{ getFormatName(type === 'before' ? setting.originalFormat : setting.settingFormat) }}
        </p>
      </div>
      <div class="setting-content size">
        <svg
          class="size-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 504.78 367.79"
          fill="#231815"
        >
          <path
            d="M479.17,367.79H25.61c-14.12,0-25.61-11.49-25.61-25.61V25.61C0,11.49,11.49,0,25.61,0H479.17c14.12,0,25.61,11.49,25.61,25.61V342.19c0,14.12-11.49,25.61-25.61,25.61ZM26,341.79H478.78V26H26V341.79Z"
          />
          <path
            d="M436.48,54.19c-.71-.12-1.44-.2-2.18-.2h-90.71c-7.18,0-13,5.82-13,13s5.82,13,13,13h79.58v77.89c0,7.18,5.82,13,13,13s13-5.82,13-13V67.17c0-7.08-5.66-12.82-12.69-12.98Z"
          />
          <path
            d="M160.08,289.52H80.49v-77.89c0-7.18-5.82-13-13-13s-13,5.82-13,13v90.71c0,7.08,5.66,12.82,12.69,12.98,.71,.12,1.44,.2,2.18,.2h90.71c7.18,0,13-5.82,13-13s-5.82-13-13-13Z"
          />
        </svg>
        <p
          class="text"
          :class="
            getChangeClass(
              `${setting.originalWidth}×${setting.originalHeight}`,
              `${setting.settingWidth}×${setting.settingHeight}`,
            )
          "
        >
          {{
            type === 'before'
              ? `${setting.originalWidth}×${setting.originalHeight}`
              : `${setting.settingWidth}×${setting.settingHeight}`
          }}
        </p>
      </div>
      <div class="setting-content capacity">
        <svg
          class="capacity-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 451.25 346.08"
          fill="#231815"
        >
          <path
            d="M451.25,138.19c0-6.78-2.02-13.53-5.96-19.29h0c-6.37-9.36-16.99-14.96-28.31-14.96h-20.56v-27.46c-.03-9.12-3.61-17.77-10.04-24.23-6.47-6.43-15.11-10.01-24.23-10.04H175.17l-10.47-22.44h0C159.07,7.71,146.95,0,133.65,0H34.27C25.15,.03,16.5,3.61,10.04,10.04,3.61,16.5,.03,25.14,0,34.27V312.96c0,1.14,.39,2.16,.66,3.23,.67,5.27,2.22,10.43,5.3,14.94h0c6.37,9.36,16.98,14.96,28.31,14.96H362.16c14.1,0,26.73-8.62,31.88-21.74l.31-.87,54.83-173.61h-.05c1.38-3.79,2.13-7.74,2.13-11.67ZM27.41,34.27c-.03-1.71,.78-3.65,2.01-4.85,1.19-1.23,3.15-2.03,4.85-2.01h99.38c2.68,0,5.07,1.53,6.21,3.96h0l14.16,30.34c2.25,4.83,7.09,7.91,12.42,7.91h195.72c1.7-.03,3.65,.78,4.85,2.01,1.23,1.2,2.03,3.14,2.01,4.85v27.46H89.09c-14.09,0-26.73,8.62-31.88,21.74l-.31,.87-29.49,93.37V34.27Zm395.94,106.45l-.32,.88-54.59,172.83c-1.04,2.52-3.53,4.24-6.29,4.24H34.27c-2.28,0-4.38-1.12-5.66-2.99h0c-.8-1.18-1.19-2.5-1.19-3.86l.47-2.49,.32-.91,54.57-172.81c1.03-2.54,3.55-4.27,6.32-4.26H416.98c2.28,0,4.38,1.12,5.66,2.99h0c.79,1.16,1.19,2.5,1.19,3.85l-.48,2.52Z"
          />
        </svg>
        <p
          class="text"
          :class="
            getChangeClass(
              getFileSize(setting.originalFileSize),
              getFileSize(setting.outputImageSize),
            )
          "
        >
          {{ getFileSize(type === 'before' ? setting.originalFileSize : setting.outputImageSize) }}
        </p>
      </div>
    </Stack8>
  </div>
</template>

<script setup lang="ts">
  import { InputFiles } from '../types/index';

  interface Props {
    type: 'before' | 'after';
    setting: InputFiles;
  }

  const props = defineProps<Props>();

  const { getFormatName } = useGetFormatName();
  const { windowWidth } = useWindowWidth();

  const formatFileSize = (data: number) => {
    if (data / 1000 < 1000) return Math.round(data / 1000) + 'KB';
    else if (data / 1000000 < 1000) return Math.round((data / 1000000) * 10) / 10 + 'MB';
    else return data + 'B';
  };

  const getChangeClass = computed(() => {
    return function (before: string, after: string) {
      return { change: props.type === 'after' && before !== after && after !== '-----' };
    };
  });

  const getFileSize = computed(() => {
    return function (key: number) {
      if (key === 0) {
        return '-----';
      } else {
        return formatFileSize(key);
      }
    };
  });
</script>

<style lang="scss" scoped>
  .setting-contents {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 245px;

    @include responsive(xs) {
    }
    @include responsive(sm) {
      width: 340px;
    }
    @include responsive(md) {
    }
    @include responsive(lg) {
      width: 265px;
    }
    @include responsive(xl) {
    }
    @include responsive(xxl) {
    }
  }

  .setting-type-mark {
    padding: 2px 8px;
    border-radius: 20px;
    font-weight: 400;
    font-size: var(--font-size-xs);
    pointer-events: none;
    &.before {
      border: 1px var(--color5) solid;
      background-color: var(--white);
      color: var(--color5);
    }
    &.after {
      background-color: var(--color5);
      color: var(--white);
    }
  }

  .setting-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @include responsive(xs) {
    }
    @include responsive(sm) {
      margin: 0 6px;
    }
    @include responsive(md) {
    }
    @include responsive(lg) {
    }
    @include responsive(xl) {
    }
    @include responsive(xxl) {
    }
    .text {
      margin-left: 8px;
      color: var(--gray8);
      font-weight: 400;
      &.change {
        color: var(--color5);
      }
    }
  }

  .format {
    width: 60px;
  }

  .size {
    width: 100px;
  }

  .capacity {
    width: 70px;
  }

  .format-icon {
    width: 13px;
    fill: var(--color5);
  }

  .size-icon {
    width: 18px;
    fill: var(--color5);
  }

  .capacity-icon {
    width: 17px;
    fill: var(--color5);
  }
</style>
