export const useSelectedEditorIndex2 = () => {
  const selectedEditorIndex2: Ref<number | undefined> = useState(
    'selectedEditorIndex2',
    () => undefined,
  );

  const updateSelectedEditorIndex2 = (value: number | undefined) => {
    selectedEditorIndex2.value = value;
  };

  return {
    selectedEditorIndex2: readonly(selectedEditorIndex2),
    updateSelectedEditorIndex2,
  };
};
