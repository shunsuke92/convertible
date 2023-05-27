export const useClearProgressBar = () => {
  const { updateNumberOfCompletedConversions } = useNumberOfCompletedConversions();
  const { updateNumberOfScheduledConversions } = useNumberOfScheduledConversions();
  const { updateIsDisplayProgressBar } = useIsDisplayProgressBar();
  const { updateIsAlreadySubmit } = useIsAlreadySubmit();

  // プログレスバーを初期化する
  const clearProgressBar = () => {
    updateNumberOfCompletedConversions(0);
    updateNumberOfScheduledConversions(0);
    updateIsDisplayProgressBar(false);
    updateIsAlreadySubmit(false);
  };

  return {
    clearProgressBar,
  };
};
