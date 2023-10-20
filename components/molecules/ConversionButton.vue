<template>
  <Button type="outline" click-reaction="ripple" :disabled="getDisabled" @click="handleClick">{{
    !getConverting ? '変換' : !getCancelButton ? '変換中' : 'キャンセル'
  }}</Button>
</template>

<script setup lang="ts">
  const { isConverting } = useIsConverting();
  const { updateIsCancelConversion } = useIsCancelConversion();
  const { submit } = useSubmit();
  const { convertingIndex } = useConvertingIndex();
  const { getConversionNum } = useGetConversionNum();

  interface Props {
    fileIndex: number;
  }

  const props = defineProps<Props>();

  const getDisabled = computed(() => {
    return isConverting.value && convertingIndex.value !== props.fileIndex;
  });

  const getCancelButton = computed(() => {
    const { total, done } = getConversionNum(props.fileIndex);
    const conversionNum = total - done;
    return conversionNum >= 2;
  });

  const getConverting = computed(() => {
    return props.fileIndex === convertingIndex.value;
  });

  const handleClick = () => {
    if (isConverting.value) {
      updateIsCancelConversion(true);
    } else {
      submit(props.fileIndex);
    }
  };
</script>

<style lang="scss" scoped></style>
