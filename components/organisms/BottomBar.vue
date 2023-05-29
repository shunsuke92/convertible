<template>
  <Bar type="bottom">
    <ZipDownloadSwitchOnTop v-if="windowWidth >= 768" />
    <ProgressBar />
    <Stack :spaceing="16">
      <ConversionAllButton />
      <DownloadAllButton />
    </Stack>
    <MakeshiftMask />
  </Bar>
</template>

<script setup lang="ts">
  const { windowWidth } = useWindowWidth();
</script>

<style lang="scss" scoped></style>
