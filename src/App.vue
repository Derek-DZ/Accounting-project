<template>
  <div id="app">
    <router-view/>
    <AddMoney/>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import AddMoney from '@/components/addMoney/AddMoney.vue';
  import store from '@/store/index2';

  @Component({
    components: {AddMoney}
  })
  export default class App extends Vue {
    store = store;

  }
</script>

<style lang="scss">
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";

  body {
    --webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    line-height: 1.5;
    background-color: $color-background;
  }

</style>
