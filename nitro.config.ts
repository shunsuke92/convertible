import { defineNitroConfig } from 'nitropack';

// https://nitro.unjs.io/config#devproxy
// https://github.com/http-party/node-http-proxy#options
export default defineNitroConfig({
  devProxy: {
    '/dev/': {
      target: 'https://0nw778k56a.execute-api.ap-northeast-1.amazonaws.com/dev',
      changeOrigin: true,
      hostRewrite: true,
      cookieDomainRewrite: true,
      headers: {
        'X-Forwarded-Host': 'localhost:3000',
        'X-Forwarded-Proto': 'http',
      },
    },
  },
});
