<template>
  <Menu
    :on="isOpenImageList"
    position="fixed"
    top="max(calc((100vh - 600px) / 2), calc(100vh - 90%) / 2)"
    left="max(calc((100vw - 900px) / 2), calc(100vw - 90%) / 2)"
    width="900px"
    height="600px"
    :cs="{ maxHeight: '90%', maxWidth: '90%' }"
    @close="closeImageList"
  >
    <MenuHeader>すべての画像</MenuHeader>
    <Stack class="content">
      <div v-for="(image, index) in inputFiles" :key="index" class="image-outer">
        <Image class="image" :file="image[0]" />
      </div>
    </Stack>

    <MenuFooter>
      <Stack align-items="center" justify-content="flex-end" style="width: 100%">
        <Button type="outline" click-reaction="ripple" @click="closeImageList">閉じる</Button>
      </Stack>
    </MenuFooter>
  </Menu>
</template>

<script setup lang="ts">
  const { inputFiles } = useInputFiles();
  const { isOpenImageList } = useIsOpenImageList();
  const { closeImageList } = useCloseImageList();
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    overflow-y: auto;
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 20px;
    height: calc(100% - 110px);
  }

  .image-outer {
    position: relative;
    margin: 10px;
  }

  .image {
    height: 100px;
  }
</style>
