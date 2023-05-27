export const useSelectedEditorIndex = () => {
  const selectedEditorIndex: Ref<number | undefined> = useState(
    'selectedEditorIndex',
    () => undefined,
  );

  const updateSelectedEditorIndex = (value: number | undefined) => {
    selectedEditorIndex.value = value;
  };

  return {
    selectedEditorIndex: readonly(selectedEditorIndex),
    updateSelectedEditorIndex,
  };
};
