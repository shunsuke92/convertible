<template>
  <div v-if="isOpen" class="attention">
    <div class="title">
      <svg
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 397.28 353.73"
        fill="#231815"
      >
        <path
          d="M392.33,299.03L230.22,18.23C223.63,6.82,211.82,0,198.64,0s-24.99,6.82-31.58,18.23L4.94,299.03h0c-6.59,11.42-6.59,25.05,0,36.47,6.59,11.41,18.39,18.23,31.57,18.23H360.76c13.18,0,24.99-6.82,31.58-18.23s6.59-25.05,0-36.47Zm-194.22-.31c-10.95,0-19.83-8.88-19.83-19.83s8.88-19.83,19.83-19.83,19.83,8.88,19.83,19.83-8.88,19.83-19.83,19.83Zm13.23-51.39h-25.41l-8.72-117.9h42.85l-8.72,117.9Z"
        />
      </svg>
      <p class="heading">Google Chromeをお使いの方へ</p>
    </div>
    <p class="text">
      Google
      Chromeでファイルをダウンロードする際に「一般的にダウンロードされているファイルではなく、危害を及ぼす可能性があります」という警告が出てダウンロードができないことがあります。<br /><br />
      Googleによると、安全なファイルであっても、以下のような場合には警告が出てしまうようです。<br />
      ・ファイルの拡張子が「.zip」または「.exe」<br />
      ・ファイルサイズが大きい<br />
      ・ダウンロード数が少ない<br /><br />
      当サイトでは、ダウンロードする画像ファイルが複数ある場合に、zipファイルでのダウンロードを行なっており、このような場合に警告が出ることが多いようです。<br /><br />
      警告が出る場合は、以下のどちらかの方法でダウンロードすることができます。<br />
      ・警告の右横にある「▼」をクリックして「継続」を選択する<br />
      ・当サイトの左下にある「複数ファイルはフォルダで保存」をOFFにして、zipファイルでのダウンロードを行わない<br /><br />
      ご不明な点がある場合は、以下のお問合せフォームより、お気軽にお問合せください。
    </p>
    <a class="link" href="https://shuuu.jp/contact">お問合せフォームはこちら</a>
    <button class="delete" @click="clickDelete">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156 153.78" fill="#231815">
        <path
          d="M151.77,129.15l-53.36-53.36,51.16-51.16c5.64-5.64,5.64-14.77,0-20.4s-14.77-5.64-20.4,0l-51.16,51.16L26.84,4.23C21.21-1.41,12.08-1.41,6.44,4.23,.8,9.86,.8,19,6.44,24.63l51.16,51.16L4.23,129.15c-5.64,5.64-5.64,14.77,0,20.41,2.82,2.82,6.51,4.23,10.2,4.23s7.38-1.41,10.2-4.23l53.37-53.36,53.36,53.36c2.82,2.82,6.51,4.23,10.2,4.23s7.38-1.41,10.2-4.23c5.64-5.64,5.64-14.77,0-20.41Z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
  const isOpen = ref(true);

  const clickDelete = () => {
    isOpen.value = !isOpen.value;
  };
</script>

<style lang="scss" scoped>
  .attention {
    position: relative;
    padding: 30px 100px;
    width: 100%;
    border: 2px var(--yellow2) solid;
    border-radius: 10px;
    background-color: var(--yellow1);
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    .icon {
      margin-right: 8px;
      width: 20px;
      fill: var(--yellow3);
    }
  }

  .heading {
    color: var(--gray8);
    font-weight: 400;
    font-size: var(--font-size-xl);
  }

  .text {
    margin-bottom: 10px;
    color: var(--gray8);
    font-size: var(--font-size-lg);
    line-height: 2em;
  }

  .delete {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    .icon {
      width: 10px;
      fill: var(--gray6);
    }
  }

  .link {
    color: var(--blue);
    text-decoration: none;
    font-weight: 500;
    font-size: var(--font-size-lg);
  }
</style>
