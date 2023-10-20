<template>
  <Button
    click-reaction="ripple"
    :width="windowWidth >= 768 ? '140px' : windowWidth >= 576 ? '252px' : '162px'"
    height="40px"
    type="outline"
    :disabled="getDisabledAllSubmitButton"
    @click="handleClick"
  >
    {{ !getConverting ? '一括変換' : !getCancelButton ? '変換中' : 'キャンセル' }}
  </Button>
</template>

<script setup lang="ts">
  const { submit } = useSubmit();
  const { updateIsCancelConversion } = useIsCancelConversion();
  const { isConvertingSingle } = useIsConvertingSingle();
  const { isConvertingAll } = useIsConvertingAll();
  const { inputFiles } = useInputFiles();
  const { isConverting } = useIsConverting();
  const { windowWidth } = useWindowWidth();
  const { getConversionNum } = useGetConversionNum();

  const handleClick = () => {
    if (isConverting.value) {
      updateIsCancelConversion(true);
    } else {
      submit(9999);
    }
  };

  const getCancelButton = computed(() => {
    const { total, done } = getConversionNum();
    const conversionNum = total - done;
    return conversionNum >= 2;
  });

  const getConverting = computed(() => {
    return isConvertingAll.value;
  });

  const getDisabledAllSubmitButton = computed(() => {
    return isConvertingSingle.value || inputFiles.value.length === 0;
  });
</script>

<style lang="scss" scoped></style>
