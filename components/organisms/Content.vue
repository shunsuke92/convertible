<template>
  <ContentWrapper v-if="windowWidth >= 1200" :file-index="fileIndex">
    <Stack
      align-items="flex-start"
      justify-content="space-between"
      :id="`content-inner-${fileIndex}`"
    >
      <ImageViewer :file="file[0]" />
      <Stack :spaceing="10" direction="column">
        <FileNameViewer :file="file[0]" />
        <SettingViewer :file="file" :file-index="fileIndex" />
      </Stack>
      <Stack :spaceing="12" direction="column" style="margin-top: 32px">
        <ConversionButton :file-index="fileIndex" />
        <DownloadButton :file-index="fileIndex" />
      </Stack>
    </Stack>
    <ContentDeleteButton :file-index="fileIndex" />
  </ContentWrapper>
  <ContentWrapper v-else-if="windowWidth >= 992" :file-index="fileIndex">
    <Stack
      align-items="flex-start"
      justify-content="space-between"
      :id="`content-inner-${fileIndex}`"
    >
      <Stack :spaceing="16" direction="column">
        <ImageViewer :file="file[0]" width="170px" height="170px" />
        <Stack :spaceing="12" direction="column">
          <ConversionButton :file-index="fileIndex" />
          <DownloadButton :file-index="fileIndex" />
        </Stack>
      </Stack>
      <Stack :spaceing="10" direction="column">
        <FileNameViewer :file="file[0]" />
        <SettingViewer :file="file" :file-index="fileIndex" />
      </Stack>
    </Stack>
    <ContentDeleteButton :file-index="fileIndex" />
  </ContentWrapper>
  <ContentWrapper v-else-if="windowWidth >= 768" :file-index="fileIndex">
    <Stack
      align-items="flex-start"
      justify-content="space-between"
      :id="`content-inner-${fileIndex}`"
    >
      <Stack :spaceing="16" direction="column">
        <ImageViewer :file="file[0]" width="200px" height="200px" />
        <Stack :spaceing="12" direction="column">
          <ConversionButton :file-index="fileIndex" />
          <DownloadButton :file-index="fileIndex" />
        </Stack>
      </Stack>
      <Stack :spaceing="10" direction="column">
        <FileNameViewer :file="file[0]" />
        <SettingViewer :file="file" :file-index="fileIndex" />
      </Stack>
    </Stack>
    <ContentDeleteButton :file-index="fileIndex" />
  </ContentWrapper>
  <ContentWrapper v-else-if="windowWidth >= 576" :file-index="fileIndex">
    <Stack
      :spaceing="16"
      align-items="center"
      justify-content="space-between"
      direction="column"
      :id="`content-inner-${fileIndex}`"
    >
      <Stack :spaceing="24" direction="row" justify-content="center" style="width: 100%">
        <Stack :spaceing="8" direction="column">
          <FileNameViewer :file="file[0]" />
          <ImageViewer :file="file[0]" width="300px" height="300px" />
        </Stack>
        <Stack :spaceing="12" direction="column" style="margin-top: 30px; width: 150px">
          <ConversionButton :file-index="fileIndex" />
          <DownloadButton :file-index="fileIndex" />
        </Stack>
      </Stack>
      <Stack :spaceing="10" direction="column">
        <SettingViewer :file="file" :file-index="fileIndex" />
      </Stack>
    </Stack>
    <ContentDeleteButton :file-index="fileIndex" />
  </ContentWrapper>
  <ContentWrapper v-else :file-index="fileIndex">
    <Stack
      :spaceing="16"
      align-items="flex-start"
      justify-content="space-between"
      direction="column"
      :id="`content-inner-${fileIndex}`"
    >
      <Stack :spaceing="16" direction="row">
        <Stack :spaceing="8" direction="column">
          <FileNameViewer :file="file[0]" />
          <ImageViewer :file="file[0]" width="316px" height="316px" />
          <Stack :spaceing="12" direction="column">
            <ConversionButton :file-index="fileIndex" />
            <DownloadButton :file-index="fileIndex" />
          </Stack>
        </Stack>
      </Stack>
      <Stack :spaceing="10" direction="column">
        <SettingViewer :file="file" :file-index="fileIndex" />
      </Stack>
    </Stack>
    <ContentDeleteButton :file-index="fileIndex" />
  </ContentWrapper>
</template>

<script setup lang="ts">
  import { InputFiles } from '~/types/index';

  interface Props {
    file: readonly InputFiles[];
    fileIndex: number;
  }

  defineProps<Props>();

  const { windowWidth } = useWindowWidth();
</script>

<style lang="scss" scoped></style>
