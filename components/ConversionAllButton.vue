<template>
  <Button
    width="140px"
    height="40px"
    type="outline"
    :disabled="getDisabledAllSubmitButton"
    @click="handleClick"
  >
    {{ !getCancelButton ? '一括変換' : 'キャンセル' }}
  </Button>
</template>

<script setup lang="ts">
  const { submit } = useSubmit();
  const { cancelConvert } = useCancelConvert();
  const { isConvertingSingle } = useIsConvertingSingle();
  const { isConvertingAll } = useIsConvertingAll();
  const { inputFiles } = useInputFiles();
  const { isConverting } = useIsConverting();

  const handleClick = () => {
    if (isConverting.value) {
      cancelConvert();
    } else {
      submit(9999);
    }
  };

  const getCancelButton = computed(() => {
    return isConvertingAll.value;
  });

  const getDisabledAllSubmitButton = computed(() => {
    return isConvertingSingle.value || inputFiles.value.length === 0;
  });
</script>

<style lang="scss" scoped></style>
