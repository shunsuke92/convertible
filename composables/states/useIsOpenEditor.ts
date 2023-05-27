export const useIsOpenEditor = () => {
  const isOpenEditor = useState<boolean>('isOpenEditor', () => false);

  const updateIsOpenEditor = (value: boolean) => {
    isOpenEditor.value = value;
  };

  return {
    isOpenEditor: readonly(isOpenEditor),
    updateIsOpenEditor,
  };
};
