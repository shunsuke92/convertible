export const useConstant = () => {
  const LOSSLESS = useState('lossless', () => ['webp', 'avif', 'heif']);
  const OPTIMIZATION = useState('optimization', () => ['jpeg']);
  const SUPPORT_FORMAT = useState('support-format', () => [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/avif',
    'image/heif',
    'image/tiff',
    'image/bmp',
  ]);
  const MAXIMUM_NUMBER_OF_IMAGES = useState('maximum-number-of-images', () => 100);
  const MAXIMUM_NUMBER_OF_SUBMIT = useState('maximum-number-of-submit', () => 1000);

  return {
    LOSSLESS: readonly(LOSSLESS),
    OPTIMIZATION: readonly(OPTIMIZATION),
    SUPPORT_FORMAT: readonly(SUPPORT_FORMAT),
    MAXIMUM_NUMBER_OF_IMAGES: readonly(MAXIMUM_NUMBER_OF_IMAGES),
    MAXIMUM_NUMBER_OF_SUBMIT: readonly(MAXIMUM_NUMBER_OF_SUBMIT),
  };
};
