<template>
  <div class="setting-bar" @click="clickSettingBar" :style="getStyle">
    <div class="setting-bar-inner">
      <Switch
        :on="isDownloadByFolder"
        text-position="right"
        top="25px"
        left="20px"
        @click="clickDownloadByFolder"
        >Zipでダウンロード</Switch
      >
      <div v-if="getProgressDisplay" class="progress-bar">
        <p
          v-if="
            numberOfScheduledConversions > 0 &&
            numberOfScheduledConversions !== numberOfCompletedConversions
          "
          class="text"
        >
          変換中
        </p>
        <p v-else class="text">完了</p>
        <div class="progress-outer">
          <span class="progress back"></span>
          <span class="progress front" :class="getConvertingClass" :style="getProgressStyle"></span>
        </div>
        <p class="percent">{{ getProgressPercent }}</p>
        <p class="subject">
          {{ numberOfCompletedConversions + '/' + numberOfScheduledConversions }}
        </p>
      </div>
      <Stack16 style="position: absolute; top: 14px; right: 20px">
        <ConversionAllButton />
        <DownloadAllButton />
      </Stack16>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { numberOfCompletedConversions } = useNumberOfCompletedConversions();
  const { numberOfScheduledConversions } = useNumberOfScheduledConversions();
  const { isOpenMenu } = useIsOpenMenu();
  const { closeMenu } = useCloseMenu();
  const { isOpenImageList } = useIsOpenImageList();
  const { isDownloadByFolder, changeIsDownloadByFolder } = useIsDownloadByFolder();
  const { isDisplayProgressBar } = useIsDisplayProgressBar();
  const { isAlreadySubmit } = useIsAlreadySubmit();
  const { closeImageList } = useCloseImageList();
  const { paddingRight } = usePaddingRight();

  const getStyle = computed(() => {
    return { paddingRight: paddingRight.value };
  });

  const clickSettingBar = () => {
    if (isOpenMenu.value) closeMenu();
    else if (isOpenImageList.value) closeImageList();
  };

  const clickDownloadByFolder = () => {
    changeIsDownloadByFolder();
  };

  const getProgressDisplay = computed(() => {
    return isDisplayProgressBar.value;
  });

  const getConvertingClass = computed(() => {
    return { converting: isAlreadySubmit.value };
  });

  const getProgressStyle = computed(() => {
    const parcent = Math.round(
      (numberOfCompletedConversions.value / numberOfScheduledConversions.value) * 100,
    );
    return { width: `${parcent}%` };
  });

  const getProgressPercent = computed(() => {
    const parcent = Math.round(
      (numberOfCompletedConversions.value / numberOfScheduledConversions.value) * 100,
    );
    return `${parcent}%`;
  });
</script>

<style lang="scss" scoped>
  .setting-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90px;
    background-color: var(--color1);
  }

  .setting-bar-inner {
    position: relative;
    margin-bottom: 20px;
    width: 1180px;
    height: 70px;
    border-top: 2px var(--gray0) solid;
    border-radius: 0 0 10px 10px;
    background-color: var(--white);
  }

  .progress-bar {
    position: absolute;
    top: 25px;
    left: 350px;
    display: flex;
    align-items: center;
    .text {
      margin-right: 6px;
      width: 40px;
      color: var(--gray7);
      text-align: right;
    }
    .progress-outer {
      position: relative;
      margin-top: 2px;
      margin-right: 4px;
      width: 350px;
      height: 5px;
      .progress {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 5px;
      }

      .back {
        width: 100%;
        background-color: var(--gray1);
      }
      .front {
        background-color: var(--color5);
      }
      .converting {
        transition: width 0.5s;
      }
    }
    .percent {
      margin-right: 12px;
      width: 34px;
      color: var(--gray7);
      text-align: right;
    }
    .subject {
      width: 50px;
      color: var(--gray7);
    }
  }

  .setting-bar-buttons {
    position: absolute;
    top: 14px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
