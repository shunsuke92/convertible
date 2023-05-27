<template>
  <MenuFooter>
    <Stack align-items="center" justify-content="space-between" style="width: 100%">
      <Button
        click-reaction="ripple"
        font-size="xs"
        type="outline"
        color="#aaaaaa"
        hoverColor="#777777"
        @click="clearSetting"
        >初期値に戻す</Button
      >
      <Stack :spaceing="12">
        <Button type="outline" click-reaction="ripple" @click="handleClick">キャンセル</Button>
        <Button type="fill" click-reaction="ripple" :disabled="getDisabled" @click="decision"
          >保存</Button
        >
      </Stack>
    </Stack>
  </MenuFooter>
</template>

<script setup lang="ts">
  import { EditorSetttingValue, UpdataEditorSetttingValue } from '~/types/index';

  interface Props {
    data: EditorSetttingValue;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{ (e: 'change', value: UpdataEditorSetttingValue): void }>();

  const { closeEditor } = useCloseEditor();
  const { editorTargetFile } = useEditorTargetFile();
  const { cancelEditor } = useCancelEditor();
  const { updateInputFileWithSettingData } = useUpdateInputFileWithSettingData();

  const getDisabled = computed(() => {
    return !(
      props.data.format !== editorTargetFile().settingFormat ||
      props.data.formatLevel !== editorTargetFile().settingFormatLevel ||
      props.data.width !== editorTargetFile().settingWidth ||
      props.data.height !== editorTargetFile().settingHeight ||
      props.data.fit !== editorTargetFile().settingFit ||
      props.data.position !== editorTargetFile().settingPosition ||
      props.data.background !== editorTargetFile().settingBackground ||
      props.data.optimization !== editorTargetFile().settingOptimization
    );
  });

  const decision = () => {
    updateInputFileWithSettingData(props.data);
    closeEditor();
  };

  const clearSetting = () => {
    const initialData: UpdataEditorSetttingValue = {
      format: editorTargetFile().originalFormat,
      formatLevel: 'middle',
      width: editorTargetFile().originalWidth,
      height: editorTargetFile().originalHeight,
      fit: 'cover',
      position: 'center',
      background: '#000000',
      isAutoAspectRatio: true,
      optimization: false,
    };
    emit('change', initialData);
  };

  const handleClick = () => {
    cancelEditor(props.data.isAutoAspectRatio);
  };
</script>

<style lang="scss" scoped></style>
