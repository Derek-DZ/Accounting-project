<template>
  <div class="nav">
    <router-link to="/money">
      <icon name="add"/>
      记账
    </router-link>
    |
    <router-link to="/labels">
      <icon name="labels"/>
      账单
    </router-link>
    |
    <router-link to="/statistic">
      <icon name="statistic"/>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  .nav {
    border: 1px solid red;
  }
</style>