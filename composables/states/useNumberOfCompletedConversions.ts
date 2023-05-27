export const useNumberOfCompletedConversions = () => {
  const numberOfCompletedConversions: Ref<number> = useState(
    'numberOfCompletedConversions',
    () => 0,
  );

  const updateNumberOfCompletedConversions = (value: number) => {
    numberOfCompletedConversions.value = value;
  };

  const increaseNumberOfCompletedConversions = () => {
    numberOfCompletedConversions.value++;
  };

  return {
    numberOfCompletedConversions: readonly(numberOfCompletedConversions),
    updateNumberOfCompletedConversions,
    increaseNumberOfCompletedConversions,
  };
};
