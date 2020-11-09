<template>
  <div class="wrapper">
    <Header/>
    <Money/>
    <layout/>
    <Tabs :data-source="outInList" class-prefix="accountsOutIn" :value.sync="type"/>
    <Tabs :data-source="dateList" class-prefix="accountsDate" :value.sync="date"/>
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
  import outInList from '@/constant/outInList';
  import dateList from '@/constant/dateList';

  @Component({
    components: {Tabs, Header, Money, AccountList},
  })
  export default class Accounts extends Vue {
    outInList = outInList;
    type = '-';
    dateList = dateList;
    date = 'day';

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 8px;
    min-height: 97vh;
  }

  ::v-deep {
    .accountsOutIn-tabs {
      > .accountsOutIn-tab-item {
        padding: 3px;
        font-size: 16px;
      }

      > .income-tab-item {
        transform: translateX(-20px);
      }

      > .outlay-tab-item {
        transform: translateX(20px);
      }

      > .accountsOutIn-tab-item.selected {
        background-color: $color-box;
        z-index: 1;
      }
    }

    .accountsDate-tabs {
      transform: translateY(-5px);
      z-index: 2;

      > .accountsDate-tab-item {
        border-radius: 10px 10px 0 0;
        font-size: 14px;
        padding: 2px;

        > .icon {
          display: none;
        }
      }

      > .day-tab-item {
        transform: translateX(10px);
        z-index: 3;
      }

      > .week-tab-item {
        z-index: 2;
      }

      > .month-tab-item {
        transform: translateX(-10px);
      }

      > .accountsDate-tab-item.selected {
        background-color: $color-box;
        z-index: 3;
      }
    }

  }
</style>