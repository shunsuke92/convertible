<template>
  <div class="setting-outer">
    <div class="setting-contents before">
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
        <p class="text">{{ getFormatName(setting.originalFormat) }}</p>
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
        <p class="text">
          {{ `${setting.originalWidth}×${setting.originalHeight}` }}
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
        <p class="text">
          {{ getBeforeFileSize(setting.originalFileSize) }}
        </p>
      </div>
    </div>
    <svg class="setting-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.47 324.84">
      <defs>
        <linearGradient
          id="arrow"
          x1="0"
          y1="162.42"
          x2="451.47"
          y2="162.42"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f0f2fa" />
          <stop offset=".63" stop-color="#95ca9f" />
          <stop offset="1" stop-color="#64b56e" />
        </linearGradient>
      </defs>
      <path
        d="M451.47,162.42l-207.46,162.42V0l207.46,162.42ZM162.68,234.11h60.23V90.72h-60.23V234.11Zm-81.34,0h60.23V90.72h-60.23V234.11Zm-81.34,0H60.23V90.72H0V234.11Z"
        style="fill: url(#arrow)"
      />
    </svg>
    <div class="setting-contents after">
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
          {{ getFormatName(setting.settingFormat) }}
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
          {{ `${setting.settingWidth}×${setting.settingHeight}` }}
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
              getBeforeFileSize(setting.originalFileSize),
              getAfterFileSize(setting.outputImageSize),
            )
          "
        >
          {{ getAfterFileSize(setting.outputImageSize) }}
        </p>
      </div>
    </div>
    <button class="setting-button" @click="openMenu(fileIndex, settingIndex)">
      <svg
        class="setting-icon"
        fill="#231815"
        pointer-events="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <g>
          <path
            class="st0"
            d="M499.453,210.004l-55.851-2.58c-5.102-0.23-9.608-3.395-11.546-8.103l-11.508-27.695c-1.937-4.728-0.997-10.145,2.455-13.914l37.668-41.332c4.718-5.188,4.546-13.205-0.421-18.182l-46.434-46.443c-4.986-4.967-13.003-5.159-18.2-0.412l-41.312,37.668c-3.778,3.443-9.206,4.402-13.924,2.436l-27.694-11.488c-4.718-1.946-7.864-6.454-8.094-11.565l-2.589-55.831C301.675,5.534,295.883,0,288.864,0h-65.708c-7.02,0-12.831,5.534-13.156,12.562l-2.571,55.831c-0.23,5.111-3.376,9.618-8.094,11.565L171.64,91.447c-4.737,1.966-10.165,1.007-13.924-2.436l-41.331-37.668c-5.198-4.746-13.215-4.564-18.201,0.412L51.769,98.198c-4.986,4.977-5.158,12.994-0.422,18.182l37.668,41.332c3.452,3.769,4.373,9.186,2.416,13.914l-11.469,27.695c-1.956,4.708-6.444,7.873-11.564,8.103l-55.832,2.58c-7.019,0.316-12.562,6.118-12.562,13.147v65.699c0,7.019,5.543,12.83,12.562,13.148l55.832,2.579c5.12,0.229,9.608,3.394,11.564,8.103l11.469,27.694c1.957,4.728,1.036,10.146-2.416,13.914l-37.668,41.313c-4.756,5.217-4.564,13.224,0.403,18.201l46.471,46.443c4.967,4.977,12.965,5.15,18.182,0.422l41.312-37.677c3.759-3.443,9.207-4.392,13.924-2.435l27.694,11.478c4.719,1.956,7.864,6.464,8.094,11.575l2.571,55.831c0.325,7.02,6.136,12.562,13.156,12.562h65.708c7.02,0,12.812-5.542,13.138-12.562l2.589-55.831c0.23-5.111,3.376-9.619,8.094-11.575l27.694-11.478c4.718-1.957,10.146-1.008,13.924,2.435l41.312,37.677c5.198,4.728,13.215,4.555,18.2-0.422l46.434-46.443c4.967-4.977,5.139-12.984,0.421-18.201l-37.668-41.313c-3.452-3.768-4.412-9.186-2.455-13.914l11.508-27.694c1.937-4.709,6.444-7.874,11.546-8.103l55.851-2.579c7.019-0.318,12.542-6.129,12.542-13.148v-65.699C511.995,216.122,506.472,210.32,499.453,210.004z M256.01,339.618c-46.164,0-83.622-37.438-83.622-83.612c0-46.184,37.458-83.622,83.622-83.622s83.602,37.438,83.602,83.622C339.612,302.179,302.174,339.618,256.01,339.618z"
          ></path>
        </g>
      </svg>
    </button>
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

    <div v-if="getSuccess(fileIndex, settingIndex)" class="success-message">
      <svg
        class="success-icon"
        width="542"
        height="542"
        viewBox="0 0 542 542"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="271" cy="271" r="271" fill="#30a13f" />
        <path
          d="M424.988 153L241.686 319.808L164.453 230.053L98 282.89L240.462 422L444 173.542L424.988 153Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { InputFiles } from '../types/index';

  const { inputFiles, clearInputFiles, deleteInputFiles } = useInputFiles();
  const { isBatchSetting } = useIsBatchSetting();
  const { isConverting } = useIsConverting();
  const { openMenu } = useOpenMenu();
  const { updateIsMouseEnterDeleteButton } = useIsMouseEnterDeleteButton();
  const { getFormatName } = useGetFormatName();

  interface Props {
    setting: InputFiles;
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

  const getBeforeFileSize = computed(() => {
    return function (key: number) {
      return formatFileSize(key);
    };
  });

  const formatFileSize = (data: number) => {
    if (data / 1000 < 1000) return Math.round(data / 1000) + 'KB';
    else if (data / 1000000 < 1000) return Math.round((data / 1000000) * 10) / 10 + 'MB';
    else return data + 'B';
  };

  const getChangeClass = computed(() => {
    return function (before: string, after: string) {
      return { change: before !== after && after !== '-----' };
    };
  });

  const getAfterFileSize = computed(() => {
    return function (key: number) {
      if (key === 0) {
        return '-----';
      } else {
        return formatFileSize(key);
      }
    };
  });

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

  const getSuccess = computed(() => {
    return function (index: number, index2: number) {
      if (isBatchSetting.value) {
        const length = inputFiles.value.length;
        return inputFiles.value[length - 1][index2].outputImage;
      } else {
        return inputFiles.value[index][index2].outputImage;
      }
    };
  });
</script>

<style lang="scss" scoped>
  .setting-outer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    /* margin-bottom: 10px; */
    padding: 7px 18px;
    width: 700px;
    border-radius: 8px;
    background-color: var(--white);
  }

  .setting-contents {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .setting-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 6px;
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

  .setting-arrow {
    margin: 0 16px;
    width: 32px;
  }

  .setting-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    padding: 5px;
    width: 29px;
    height: 29px;
    border-radius: 5px;

    @include hover() {
      background-color: var(--color2);
    }
    &::before {
      position: absolute;
      top: -1px;
      left: -14px;
      width: 1px;
      height: 32px;
      background-color: var(--color5);
      content: '';
    }
  }

  .setting-icon {
    width: 28px;
    fill: var(--color5);
  }

  .success-message {
    position: absolute;
    top: 0;
    left: calc(100% + 14px);
    display: flex;
    align-items: center;
    width: 30px;
    height: 100%;
  }

  .success-icon {
    width: 16px;
  }
</style>
