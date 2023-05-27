<template>
  <Main>
    <Container>
      <Header />
      <DropArea />
      <Contents />
      <!-- <Attention /> -->
      <BottomBar />
      <ImageList />
      <Editor />
    </Container>
  </Main>
</template>

<script setup lang="ts">
  const { updateWindowWidth } = useWindowWidth();

  onMounted(() => {
    updateWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      updateWindowWidth(window.innerWidth);
    });
  });

  onUnmounted(() => {
    window.removeEventListener('resize', () => {
      updateWindowWidth(window.innerWidth);
    });
  });
</script>

<style lang="scss" scoped></style>
