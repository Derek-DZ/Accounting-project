<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"/>
      账单
      <div class="labels-line"></div>
    </router-link>
    <router-link to="/statistic" class="item" active-class="selected">
      <Icon name="statistic"/>
      统计
      <div class="statistic-line"></div>
    </router-link>
  </nav>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  nav {
    display: flex;
    margin-top: 10px;
    > .item {
      color: $color-lowLight;
      font-size: 16px;
      font-weight: bolder;
      margin-left: 30px;
      line-height: 2em;
      text-decoration: none;
    }

    > .item.selected {
      color: $color-highLight;
      > .icon {
        color: $color-theme;
      }
    }
  }
</style>