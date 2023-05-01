export const useNumberOfScheduledConversions = () => {
  const numberOfScheduledConversions: Ref<number> = useState(
    'numberOfScheduledConversions',
    () => 0,
  );

  const updateNumberOfScheduledConversions = (value: number) => {
    numberOfScheduledConversions.value = value;
  };

  return {
    numberOfScheduledConversions: readonly(numberOfScheduledConversions),
    updateNumberOfScheduledConversions,
  };
};
