import { Format } from '~/types/index';

export const useGetFormatName = () => {
  const getFormatName = computed(() => {
    return function (key: Format) {
      if (key === 'webp') return 'WebP';
      else return key.toUpperCase();
    };
  });

  return {
    getFormatName,
  };
};
