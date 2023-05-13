<template>
  <Switch :on="isDownloadByFolder" text-position="right" @click="clickDownloadByFolder">
    <slot></slot>
  </Switch>
</template>

<script setup lang="ts">
  const { isDownloadByFolder, changeIsDownloadByFolder } = useIsDownloadByFolder();

  const clickDownloadByFolder = () => {
    changeIsDownloadByFolder();
  };
</script>

<style lang="scss" scoped></style>
