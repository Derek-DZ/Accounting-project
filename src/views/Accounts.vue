<template>
  <div class="wrapper">
    <Header/>
    <Money/>
    <layout/>
    <AccountList />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import AccountList from '@/components/accounts/AccountList.vue';
  import Money from '@/components/Money.vue';
  import Header from '@/components/Header.vue';
  import Tabs from '@/components/Tabs.vue';

  @Component({
    components: {Tabs, Header, Money, AccountList},
  })
  export default class Accounts extends Vue {


  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 8px;
    max-height: 97vh;
  }

</style>