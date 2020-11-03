<template>
  <div>
    <router-view />
    <AddMoney />
  </div>
</template>


<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import AddMoney from '@/components/addMoney/AddMoney.vue';

  @Component({
    components: {AddMoney}
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  @import "~@/assets/style/helper.scss";
  @import "~@/assets/style/reset.scss";
  body{
    --webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    line-height: 1.5;
    background-color: $color-background;
  }
</style>
