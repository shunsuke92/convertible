<template>
  <TransitionGroup
    v-if="!isMouseEnterDeleteButton"
    tag="div"
    name="fade"
    style="width: 100%"
    class="stack10"
  >
    <Setting
      v-for="(setting, settingIndex) in file"
      :key="setting.settingId"
      :file-index="fileIndex"
      :setting-index="settingIndex"
      :setting="setting"
    />
    <AddSettingButton key="99999" :file-index="fileIndex" style="margin: 20px 0 12px 40%" />
  </TransitionGroup>
  <template v-else>
    <div class="stack10">
      <Setting
        v-for="(setting, settingIndex) in file"
        :key="setting.settingId"
        :file-index="fileIndex"
        :setting-index="settingIndex"
        :setting="setting"
      />
      <AddSettingButton :file-index="fileIndex" style="margin: 20px 0 12px 40%" />
    </div>
  </template>
</template>

<script setup lang="ts">
  import { InputFiles } from '~/types/index';

  const { isMouseEnterDeleteButton } = useIsMouseEnterDeleteButton();

  interface Props {
    file: readonly InputFiles[];
    fileIndex: number;
  }

  defineProps<Props>();
</script>

<style lang="scss" scoped>
  .fade-move,
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: scaleY(0);
  }

  .fade-leave-active {
    position: absolute !important;
  }

  .stack10 {
    & > :not(:last-child) {
      margin-bottom: 10px;
    }
  }
</style>
