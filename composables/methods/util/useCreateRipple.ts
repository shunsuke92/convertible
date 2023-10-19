export const useCreateRipple = () => {
  // eslint-disable-next-line
  const createRipple = (event: any, color: `#${string}` | `var(--${string}`) => {
    const button = event.currentTarget;

    const clientRect = button?.getBoundingClientRect();
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
    radius *= 1.4;

    const time = radius * (4 / 3) + 280;

    const ripple = document.createElement('span');
    ripple.style.width = `${radius * 2}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.left = `${x - radius}px`;
    ripple.style.top = `${y - radius}px`;
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = color;
    ripple.style.opacity = '0.4';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = `ripple ${time / 1000}s linear`;
    ripple.style.pointerEvents = 'none';

    button?.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, time);
  };

  return {
    createRipple,
  };
};
