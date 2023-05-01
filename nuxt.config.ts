// https://nuxt.com/docs/api/configuration/nuxt-config

const description =
  'WebP対応の画像変換サイトです。次世代のフォーマットに対応し、Web開発者をサポートします。';
const keywords = 'web,jpeg,png,gif,webp,avif';
const url = 'https://convertible92.com';

export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: 'Convertible',
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: keywords,
        },
        { name: 'format-detection', content: 'telephone=no' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },

        // OGP設定
        { hid: 'og:site_name', property: 'og:site_name', content: 'Convertible' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: url,
        },
        { hid: 'og:title', property: 'og:title', content: 'Convertible' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${url}/ogp.png`,
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
          sizes: '180x180',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap',
        },
      ],
    },
  },
  css: ['@/assets/scss/ress.scss', '@/assets/scss/common.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/mixin.scss"; @import "@/assets/scss/font.scss"; @import "@/assets/scss/color.scss";',
        },
      },
    },
  },
  // .env用
  runtimeConfig: {
    public: {
      apiKey: '',
    },
  },
});
