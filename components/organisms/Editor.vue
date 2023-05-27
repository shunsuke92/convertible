<template>
  <Menu
    v-if="windowWidth >= 768"
    :on="isOpenEditor"
    position="fixed"
    top="max(calc((100vh - 740px) / 2), calc((100vh - 90%) / 2))"
    left="calc((100vw - 700px) / 2)"
    width="700px"
    height="740px"
    :cs="{ maxHeight: '90%' }"
    @close="handleClose"
  >
    <MenuHeader>設定</MenuHeader>
    <MenuList>
      <EditorReformatArea @change="changeData" :data="data" />
      <Stack align-items="center" justify-content="flex-start">
        <EditorResizeArea @change="changeData" :data="data" />
        <EditorImageArea :data="data" />
      </Stack>
    </MenuList>
    <EditorFooter @change="changeData" :data="data" />
  </Menu>
  <Menu
    v-else
    :on="isOpenEditor"
    position="fixed"
    top="max(calc((100vh - 740px) / 2), calc((100vh - 90%) / 2))"
    left="calc((100vw - 370px) / 2)"
    width="370px"
    height="740px"
    :cs="{ maxHeight: '90%' }"
    @close="handleClose"
  >
    <MenuHeader>設定</MenuHeader>
    <MenuList>
      <EditorImageArea :data="data" />
      <EditorReformatArea @change="changeData" :data="data" />
      <EditorResizeArea @change="changeData" :data="data" />
    </MenuList>
    <EditorFooter @change="changeData" :data="data" />
  </Menu>
</template>

<script setup lang="ts">
  import { EditorSetttingValue, UpdataEditorSetttingValue } from '~/types/index';

  const data = ref<EditorSetttingValue>({
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

  const { isOpenEditor } = useIsOpenEditor();
  const { editorTargetFile } = useEditorTargetFile();
  const { cancelEditor } = useCancelEditor();
  const { windowWidth } = useWindowWidth();

  watch(isOpenEditor, (value) => {
    if (value) {
      initialSet();
    }
  });

  const changeData = (value: UpdataEditorSetttingValue) => {
    data.value = { ...data.value, ...value };
  };

  const initialSet = () => {
    data.value.format = editorTargetFile().settingFormat;
    data.value.formatLevel = editorTargetFile().settingFormatLevel;
    data.value.width = editorTargetFile().settingWidth;
    data.value.height = editorTargetFile().settingHeight;
    data.value.fit = editorTargetFile().settingFit;
    data.value.position = editorTargetFile().settingPosition;
    data.value.background = editorTargetFile().settingBackground;
    data.value.isAutoAspectRatio = editorTargetFile().isAutoAspectRatio;
    data.value.optimization = editorTargetFile().settingOptimization;
  };

  const handleClose = () => {
    cancelEditor(data.value.isAutoAspectRatio);
  };
</script>

<style lang="scss" scoped></style>
