export const useCancelConvert = () => {
  const { updateIsCancelConversion } = useIsCancelConversion();

  const cancelConvert = () => {
    updateIsCancelConversion(true);
  };

  return {
    cancelConvert,
  };
};
