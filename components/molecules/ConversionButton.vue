<template>
  <Button type="outline" click-reaction="ripple" :disabled="getDisabled" @click="handleClick">{{
    !getCancelButton ? '変換' : 'キャンセル'
  }}</Button>
</template>

<script setup lang="ts">
  const { isConverting } = useIsConverting();
  const { updateIsCancelConversion } = useIsCancelConversion();
  const { submit } = useSubmit();
  const { convertingIndex } = useConvertingIndex();

  interface Props {
    fileIndex: number;
  }

  const props = defineProps<Props>();

  const getDisabled = computed(() => {
    return isConverting.value && convertingIndex.value !== props.fileIndex;
  });

  const getCancelButton = computed(() => {
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
