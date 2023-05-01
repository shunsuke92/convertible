<template>
  <div>
    <RippleProvider :class="`ripple-${lot}`" :style="getStyle()">
      <slot></slot>
    </RippleProvider>
  </div>
</template>

<script setup lang="ts">
  import { RippleProvider } from './RippleProvider';

  interface Props {
    /**
     * アプリケーション内で一意な値を設定する
     */
    lot: string;
    color: `#${string}`;
  }

  const props = defineProps<Props>();

  const rippleElement = ref<HTMLSpanElement>();

  const getStyle = () => {
    return {
      position: 'relative',
      overflow: 'hidden',
    };
  };

  onMounted(() => {
    const elements = document.getElementsByClassName(`ripple-${props.lot}`);
    elements[0]?.addEventListener('mousedown', createRipple);
  });

  onUnmounted(() => {
    const elements = document.getElementsByClassName(`ripple-${props.lot}`);
    elements[0]?.removeEventListener('mousedown', createRipple);
  });

  // eslint-disable-next-line
  const createRipple = (event: any) => {
    const button = event.currentTarget;

    var clientRect = button?.getBoundingClientRect();
    if (clientRect === undefined) return;
    const buttonPositionX = clientRect.left;
    const buttonPositionY = clientRect.top;
    const clickPositionX = event.clientX;
    const clickPositionY = event.clientY;
    const x = clickPositionX - buttonPositionX;
    const y = clickPositionY - buttonPositionY;

    let radius;
    if (button.clientWidth >= button.clientHeight) {
      const left = x;
      const right = clientRect.width - x;
      radius = Math.max(left, right);
    } else {
      const upper = y;
      const lower = clientRect.height - y;
      radius = Math.max(upper, lower);
    }

    let ripple = document.createElement('span');
    rippleElement.value = ripple;
    ripple.style.width = `${radius * 2}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.left = `${x - radius}px`;
    ripple.style.top = `${y - radius}px`;
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = props.color;
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple .45s linear';
    ripple.style.pointerEvents = 'none';

    button?.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 450);
  };
</script>

<style>
  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(1);
    }
  }
</style>
