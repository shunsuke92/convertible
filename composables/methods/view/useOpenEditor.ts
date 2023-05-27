import { backgroundFixed } from '~~/utils/backgroundFixed';

export const useOpenEditor = () => {
  const { updateIsOpenEditor } = useIsOpenEditor();
  const { updateSelectedEditorIndex } = useSelectedEditorIndex();
  const { updateSelectedEditorIndex2 } = useSelectedEditorIndex2();
  const { updatePaddingRight } = usePaddingRight();

  const openEditor = (index: number, index2: number) => {
    updateIsOpenEditor(true);
    updateSelectedEditorIndex(index);
    updateSelectedEditorIndex2(index2);
    const paddingRight = backgroundFixed(true);
    updatePaddingRight(paddingRight);
  };

  return {
    openEditor,
  };
};
