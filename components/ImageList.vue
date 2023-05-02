<template>
  <div v-if="isOpenImageList" class="menu-wrapper">
    <Mask @click="closeImageList" :on="isOpenImageList" />
    <div class="menu">
      <div class="header">
        <p class="header-text">すべての画像</p>
      </div>
      <div class="content">
        <div v-for="(image, index) in inputFiles" :key="index" class="image-outer">
          <Image class="image" :file="image[0]" />
        </div>
      </div>
      <div class="footer">
        <div class="button-outer">
          <Button type="outline" @click="closeImageList">閉じる</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { inputFiles } = useInputFiles();
  const { isOpenImageList } = useIsOpenImageList();
  const { closeImageList } = useCloseImageList();
</script>

<style lang="scss" scoped>
  .menu {
    position: absolute;
    top: 230px;
    left: calc((1200px - 900px) / 2);
    z-index: 1000;
    width: 900px;
    height: 600px;
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.3);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    width: 100%;
    height: 50px;
    border-radius: 10px 10px 0 0;
    background-color: var(--color5);
  }

  .header-text {
    color: var(--white);
    font-weight: 500;
    font-size: var(--font-size-xl);
  }

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

  .footer {
    width: 100%;
    height: 60px;
  }

  .button-outer {
    position: absolute;
    right: 24px;
    bottom: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
