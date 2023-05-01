<template>
  <div v-if="isOpenMenu">
    <Mask @click="handleClick" :on="isOpenMenu" />
    <MenuWrapper>
      <MenuHeaderArea />
      <MenuFormatArea @change="changeData" :data="data" />
      <Stack0 align-items="center" justify-content="flex-start">
        <MenuEditArea @change="changeData" :data="data" />
        <MenuImageArea :data="data" />
      </Stack0>
      <MenuFooterArea @change="changeData" :data="data" />
    </MenuWrapper>
  </div>
</template>

<script setup lang="ts">
  import { MenuSetttingValue, UpdataMenuSetttingValue } from '../types/index';

  const data = ref<MenuSetttingValue>({
    format: 'jpeg',
    formatLevel: 'lossless',
    width: 0,
    height: 0,
    fit: 'cover',
    position: 'center',
    background: '#000000',
    isAutoAspectRatio: true,
    optimization: false,
  });

  const { isOpenMenu } = useIsOpenMenu();
  const { menuTargetFile } = useMenuTargetFile();
  const { cancelMenu } = useCancelMenu();

  watch(isOpenMenu, (value) => {
    if (value) {
      initialSet();
    }
  });

  const changeData = (value: UpdataMenuSetttingValue) => {
    data.value = { ...data.value, ...value };
  };

  const initialSet = () => {
    data.value.format = menuTargetFile().settingFormat;
    data.value.formatLevel = menuTargetFile().settingFormatLevel;
    data.value.width = menuTargetFile().settingWidth;
    data.value.height = menuTargetFile().settingHeight;
    data.value.fit = menuTargetFile().settingFit;
    data.value.position = menuTargetFile().settingPosition;
    data.value.background = menuTargetFile().settingBackground;
    data.value.isAutoAspectRatio = menuTargetFile().isAutoAspectRatio;
    data.value.optimization = menuTargetFile().settingOptimization;
  };

  const handleClick = () => {
    cancelMenu(data.value.isAutoAspectRatio);
  };
</script>

<style lang="scss" scoped></style>
