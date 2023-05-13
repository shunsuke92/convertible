<template>
  <Stack16 direction="column" class="resize-area">
    <Stack8 direction="column">
      <Stack8 align-items="center" justify-content="flex-start">
        <Stack8 direction="column">
          <label for="width">
            <MenuTitle>幅</MenuTitle>
          </label>
          <input
            id="width"
            v-model="pendingWidth"
            class="input-number"
            type="number"
            @change="changeSize('width')"
          />
        </Stack8>
        <span class="multiplication">×</span>
        <Stack8 direction="column">
          <label for="height">
            <MenuTitle>高さ</MenuTitle>
          </label>
          <input
            id="height"
            v-model="pendingHeight"
            class="input-number"
            type="number"
            @change="changeSize('height')"
          />
        </Stack8>
      </Stack8>
      <p v-if="isDegitOverflow" class="attention">9999以下で入力してください。</p>
      <Switch :on="data.isAutoAspectRatio" text-position="left" @click="clickSwitch"
        >アスペクト比を維持</Switch
      ></Stack8
    >
    <Stack8 direction="column">
      <MenuTitle>フィット</MenuTitle>
      <Stack12 align-items="center" justify-content="flex-start">
        <ChipButton
          :selected="data.fit === 'cover'"
          :disabled="data.isAutoAspectRatio"
          :padding-top="12"
          :padding-bottom="12"
          :padding-left="12"
          :padding-right="12"
          :border-radius="5"
          @click="clickFit('cover')"
          >COVER</ChipButton
        >
        <ChipButton
          :selected="data.fit === 'contain'"
          :disabled="data.isAutoAspectRatio"
          :padding-top="12"
          :padding-bottom="12"
          :padding-left="12"
          :padding-right="12"
          :border-radius="5"
          @click="clickFit('contain')"
          >CONTAIN</ChipButton
        >
        <ChipButton
          :selected="data.fit === 'fill'"
          :disabled="data.isAutoAspectRatio"
          :padding-top="12"
          :padding-bottom="12"
          :padding-left="12"
          :padding-right="12"
          :border-radius="5"
          @click="clickFit('fill')"
          >FILL</ChipButton
        >
      </Stack12>
    </Stack8>
    <Stack8 direction="column">
      <MenuTitle>位置</MenuTitle>
      <Stack12 align-items="center" justify-content="flex-start">
        <ChipButton
          :selected="data.position === 'top'"
          :disabled="getPositionDisabled('top')"
          :padding-top="12"
          :padding-bottom="12"
          :padding-left="12"
          :padding-right="12"
          :border-radius="5"
          @click="clickPosition('top')"
        >
          <ArrowImage type="top" />
        </ChipButton>
        <ChipButton
          :selected="data.position === 'right'"
          :disabled="getPositionDisabled('right')"
          :padding-top="12"
          :padding-bottom="12"
          :padding-left="12"
          :padding-right="12"
          :border-radius="5"
          @click="clickPosition('right')"
        >
          <ArrowImage type="right" />
        </ChipButton>
        <ChipButton
          :selected="data.position === 'bottom'"
          :disabled="getPositionDisabled('bottom')"
          :padding-top="12"
          :padding-bottom="12"
          :padding-left="12"
          :padding-right="12"
          :border-radius="5"
          @click="clickPosition('bottom')"
        >
          <ArrowImage type="bottom" />
        </ChipButton>
        <ChipButton
          :selected="data.position === 'left'"
          :disabled="getPositionDisabled('left')"
          :padding-top="12"
          :padding-bottom="12"
          :padding-left="12"
          :padding-right="12"
          :border-radius="5"
          @click="clickPosition('left')"
        >
          <ArrowImage type="left" />
        </ChipButton>
      </Stack12>
    </Stack8>
    <Stack8 direction="column">
      <label for="color" disabled>
        <MenuTitle>背景色</MenuTitle>
      </label>
      <input
        id="color"
        class="input-color"
        type="color"
        :value="!data.isAutoAspectRatio ? props.data.background : '#ffffff'"
        @change="changeColor"
        :disabled="data.isAutoAspectRatio"
      />
    </Stack8>
  </Stack16>
</template>

<script setup lang="ts">
  import {
    SettingFit,
    SettingPosition,
    EditorSetttingValue,
    UpdataEditorSetttingValue,
  } from '../types/index';

  interface Props {
    data: EditorSetttingValue;
  }

  const props = defineProps<Props>();

  const isDegitOverflow = ref(false);
  const pendingWidth = ref(props.data.width);
  const pendingHeight = ref(props.data.height);

  const { editorTargetFile } = useEditorTargetFile();

  watch(
    () => props.data.width,
    (value) => {
      if (value !== pendingWidth.value) {
        pendingWidth.value = value;
      }
    },
  );

  watch(
    () => props.data.height,
    (value) => {
      if (value !== pendingHeight.value) {
        pendingHeight.value = value;
      }
    },
  );

  const emit = defineEmits<{ (e: 'change', value: UpdataEditorSetttingValue): void }>();

  const getPositionDisabled = computed(() => {
    return (position: 'top' | 'bottom' | 'left' | 'right') => {
      const settingRatio = props.data.width / props.data.height;
      const originalRatio = editorTargetFile().originalWidth / editorTargetFile().originalHeight;
      const sameRatio = originalRatio === settingRatio;
      const isShrunkWidth = originalRatio > settingRatio;
      let unavailablePosition = false;
      if (props.data.fit === 'cover') {
        if (position === 'top' || position === 'bottom') {
          unavailablePosition = isShrunkWidth;
        } else {
          unavailablePosition = !isShrunkWidth;
        }
      } else if (props.data.fit === 'contain') {
        if (position === 'top' || position === 'bottom') {
          unavailablePosition = !isShrunkWidth;
        } else {
          unavailablePosition = isShrunkWidth;
        }
      }

      return (
        props.data.isAutoAspectRatio ||
        props.data.fit === 'fill' ||
        unavailablePosition ||
        sameRatio
      );
    };
  });

  const changeSize = (key: 'width' | 'height', forced = false) => {
    // アスペクト比の調整
    if (props.data.isAutoAspectRatio || forced) {
      adjustAspectRatio(key);
    }

    // 桁数チェック
    checkOverflow();

    // ローカルデータに設定
    emit('change', { width: pendingWidth.value, height: pendingHeight.value });
  };

  const clickFit = (key: SettingFit) => {
    emit('change', { fit: key });
  };

  const clickPosition = (key: SettingPosition) => {
    if (props.data.position === key) {
      emit('change', { position: 'center' });
    } else {
      emit('change', { position: key });
    }
  };

  const clickSwitch = (value: boolean) => {
    emit('change', { isAutoAspectRatio: !value });

    // ONになった時はアスペクト比の調整と桁数チェックを実施
    if (!value) {
      changeSize('width', true);
    }
  };

  // eslint-disable-next-line
  const changeColor = (event: any) => {
    emit('change', { background: event.target.value });
  };

  const adjustAspectRatio = (standard: 'width' | 'height') => {
    if (standard === 'width') {
      pendingHeight.value = Math.round(
        pendingWidth.value * (editorTargetFile().originalHeight / editorTargetFile().originalWidth),
      );
    } else {
      pendingWidth.value = Math.round(
        pendingHeight.value *
          (editorTargetFile().originalWidth / editorTargetFile().originalHeight),
      );
    }
  };

  const checkOverflow = () => {
    let count = 0;
    if (pendingWidth.value >= 10000) {
      pendingWidth.value = 9999;
      if (props.data.isAutoAspectRatio) {
        adjustAspectRatio('width');
      }
      count++;
    }
    if (pendingHeight.value >= 10000) {
      pendingHeight.value = 9999;
      if (props.data.isAutoAspectRatio) {
        adjustAspectRatio('height');
      }
      count++;
    }
    if (count > 0) {
      isDegitOverflow.value = true;
    } else {
      isDegitOverflow.value = false;
    }
  };
</script>

<style lang="scss" scoped>
  .resize-area {
    @include responsive(xs) {
    }
    @include responsive(sm) {
    }
    @include responsive(md) {
      width: 50%;
    }
    @include responsive(lg) {
    }
    @include responsive(xl) {
    }
    @include responsive(xxl) {
    }
  }
  .input-number {
    box-sizing: border-box;
    padding: 3px 6px;
    width: 80px;
    height: 28px;
    border: 1px var(--gray5) solid;
    border-radius: 4px;
    color: var(--gray9);
    font-weight: 400;
    transition: border 0.2s;

    @include hover() {
      border: 1px var(--gray10) solid;
    }
    &:focus {
      border: 2px var(--color9) solid;
    }
  }

  .input-color {
    padding: 2px 4px;
    width: 140px;
    height: 40px;
    border: 1px var(--gray5) solid;
    border-radius: 4px;
    transition: border 0.2s;

    @include hover() {
      border: 1px var(--gray10) solid;
    }
    &:focus {
      border: 1px var(--gray10) solid;
    }
    &:disabled {
      border: 1px var(--gray3) solid;
    }
  }

  .multiplication {
    margin-top: 26px;
    color: var(--gray8);
    font-weight: 500;
  }

  .attention {
    margin-bottom: 4px;
    color: var(--red);
    font-size: var(--font-size-xs);
  }
</style>
