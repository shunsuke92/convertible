<template>
  <div class="footer">
    <div class="clear-button">
      <Button font-size="xs" type="outline" color="#aaaaaa" @click="clearSetting"
        >初期値に戻す</Button
      >
    </div>
    <Stack12 style="position: absolute; right: 18px; bottom: 14px">
      <Button type="outline" @click="handleClick">キャンセル</Button>
      <Button type="fill" :disabled="getDisabled" @click="decision">保存</Button>
    </Stack12>
  </div>
</template>

<script setup lang="ts">
  import { MenuSetttingValue, UpdataMenuSetttingValue } from '../types/index';

  interface Props {
    data: MenuSetttingValue;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{ (e: 'change', value: UpdataMenuSetttingValue): void }>();

  const { closeMenu } = useCloseMenu();
  const { menuTargetFile } = useMenuTargetFile();
  const { cancelMenu } = useCancelMenu();
  const { updateInputFileWithSettingData } = useUpdateInputFileWithSettingData();

  const getDisabled = computed(() => {
    return !(
      props.data.format !== menuTargetFile().settingFormat ||
      props.data.formatLevel !== menuTargetFile().settingFormatLevel ||
      props.data.width !== menuTargetFile().settingWidth ||
      props.data.height !== menuTargetFile().settingHeight ||
      props.data.fit !== menuTargetFile().settingFit ||
      props.data.position !== menuTargetFile().settingPosition ||
      props.data.background !== menuTargetFile().settingBackground ||
      props.data.optimization !== menuTargetFile().settingOptimization
    );
  });

  const decision = () => {
    updateInputFileWithSettingData(props.data);
    closeMenu();
  };

  const clearSetting = () => {
    const initialData: UpdataMenuSetttingValue = {
      format: 'jpeg',
      formatLevel: 'lossless',
      width: menuTargetFile().originalWidth,
      height: menuTargetFile().originalHeight,
      fit: 'cover',
      position: 'center',
      background: '#000000',
      isAutoAspectRatio: true,
      optimization: false,
    };
    emit('change', initialData);
  };

  const handleClick = () => {
    cancelMenu(props.data.isAutoAspectRatio);
  };
</script>

<style lang="scss" scoped>
  .clear-button {
    position: absolute;
    bottom: 17px;
    left: 18px;
  }

  .footer {
    padding: 0 24px;
    width: 100%;
    height: 60px;
  }

  .button-outer {
    position: absolute;
    right: 18px;
    bottom: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
