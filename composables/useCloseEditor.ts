import { backgroundFixed } from '~~/utils/backgroundFixed';

export const useCloseEditor = () => {
  const { updateIsOpenEditor } = useIsOpenEditor();
  const { updateSelectedEditorIndex } = useSelectedEditorIndex();
  const { updateSelectedEditorIndex2 } = useSelectedEditorIndex2();
  const { updatePaddingRight } = usePaddingRight();

  const closeEditor = () => {
    updateIsOpenEditor(false);
    updateSelectedEditorIndex(undefined);
    updateSelectedEditorIndex2(undefined);
    const paddingRight = backgroundFixed(false);
    updatePaddingRight(paddingRight);
  };

  return {
    closeEditor,
  };
};
