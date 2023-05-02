// 未使用
export const RippleProvider = {
  props: {
    class: {
      type: String,
      required: true,
    },
    style: {
      type: Object,
      required: true,
    },
  },
  render() {
    const slots = this.$slots.default();
    const slot = slots[0];

    slot.children[0].props.class =
      slot.children[0].props.class !== undefined
        ? slot.children[0].props.class + ' ' + this.class
        : this.class;

    slot.children[0].props.style =
      slot.children[0].props.style !== undefined
        ? { ...slot.children[0].props.style, ...this.style }
        : this.style;

    return h(slot);
  },
};
