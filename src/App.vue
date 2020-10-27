<template>
  <div>
    App
    <hr/>
    <router-view></router-view>
    <hr/>
    <div>
      <router-link to="/money">记账</router-link>
      |
      <router-link to="/labels">账单</router-link>
      |
      <router-link to="/statistic">统计</router-link>
    </div>
  </div>
</template>

<style lang="scss">
</style>
