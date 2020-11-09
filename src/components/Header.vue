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
  header {
    display: flex;
    justify-content: center;
    max-width: 100vw;
    > .header-background {
      position: absolute;
      align-self: center;
      top: -40px;
      min-width: 100vw;
      height: 150px;
      background-color: #282828;
      border-radius: 10%;
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