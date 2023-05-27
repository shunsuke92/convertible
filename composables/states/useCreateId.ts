export const useCreateId = () => {
  const id: Ref<number> = useState('id', () => 0);

  const createId = (): number => {
    id.value++;
    return id.value;
  };

  return {
    createId,
  };
};
