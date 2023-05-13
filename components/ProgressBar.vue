<template>
  <span class="progress-bar" :class="getConvertingClass" :style="getProgressStyle"></span>
</template>

<script setup lang="ts">
  const { numberOfCompletedConversions } = useNumberOfCompletedConversions();
  const { numberOfScheduledConversions } = useNumberOfScheduledConversions();
  const { isDisplayProgressBar } = useIsDisplayProgressBar();
  const { isAlreadySubmit } = useIsAlreadySubmit();

  const getProgressStyle = computed(() => {
    if (isDisplayProgressBar.value && numberOfScheduledConversions.value > 0) {
      const parcent = Math.round(
        (numberOfCompletedConversions.value / numberOfScheduledConversions.value) * 100,
      );
      return { width: `${parcent}%` };
    } else {
      return { width: `0%` };
    }
  });

  const getConvertingClass = computed(() => {
    return {
      converting: isAlreadySubmit.value,
      done:
        numberOfScheduledConversions.value > 0 &&
        numberOfCompletedConversions.value === numberOfScheduledConversions.value,
    };
  });
</script>

<style lang="scss" scoped>
  .progress-bar {
    position: absolute;
    top: -2px;
    left: 0;
    height: 2px;
    background-color: var(--color5);
  }

  .converting {
    transition: width 0.5s;
  }

  .done {
    opacity: 0;
    transition: width 0.5s, opacity 3s 3s;
  }
</style>
