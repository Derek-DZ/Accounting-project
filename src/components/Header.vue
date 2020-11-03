<template>
  <header>
    <figure class="header-background"></figure>
    <div class="title-logo">
      <span class="title">多彩记账</span>
      <span class="slogan">记录多彩生活</span>
    </div>
  </header>
</template>

<script lang="ts">
  export default {
    name: 'Header'
  };
</script>
<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  /*@import "~@/assets/style/reset.scss";*/
  header {
    display: flex;
    justify-content: center;
    > .header-background {
      position: absolute;
      align-self: center;
      top: -380px;
      min-width: 140vw;
      height: 500px;
      background-color: #282828;
      border-radius: 200px;
      margin: 0;
      z-index: -1;
    }
    > .title-logo {
      color: $color-theme;
      /*font-weight: bold;*/
      display: flex;
      justify-content: space-between;
      margin: 8px;
      width: 88vw;
      > .title {

      }
      > .slogan {

      }
    }
  }

</style>