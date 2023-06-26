<template>
  <h1 class="logo">
    <a href="https://convertible92.com">
      <ConvertibleLogo class="convertible-logo" />
    </a>
  </h1>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .convertible-logo {
    width: 105px;

    @include responsive(xs) {
    }
    @include responsive(sm) {
      width: 110px;
    }
    @include responsive(md) {
      width: 115px;
    }
    @include responsive(lg) {
      width: 130px;
    }
    @include responsive(xl) {
    }
    @include responsive(xxl) {
    }
  }
</style>
