export const useEditorTargetFile = () => {
  const { inputFiles } = useInputFiles();
  const { selectedEditorIndex } = useSelectedEditorIndex();
  const { selectedEditorIndex2 } = useSelectedEditorIndex2();

  const editorTargetFile = () => {
    return inputFiles.value[selectedEditorIndex.value ?? 0][selectedEditorIndex2.value ?? 0];
  };

  return {
    editorTargetFile,
  };
};
