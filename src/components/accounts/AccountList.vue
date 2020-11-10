<template>
  <div class="accountWrapper">
    <Tabs :data-source="outInList" class-prefix="accountsOutIn" :value.sync="type"
    />
    <Tabs :data-source="dateList" class-prefix="accountsDate" :value.sync="date"/>
    <AccountType v-for="option in accountTypeList" :key="option.id"
                 :record-tree="newRecordTreeDay(option.date,option.type)"
                 v-show="type===option.type && date===option.date" :beautify-title="option.beautifyTitle"
                 :beautify-account="option.beautifyAccount"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import store from '@/store/index2';
  import dayjs from 'dayjs';
  import Tag from '@/components/Tag.vue';
  import outInList from '@/constant/outInList';
  import Tabs from '@/components/Tabs.vue';
  import accountDateList from '@/constant/accountDateList';
  import AccountType from '@/components/accounts/AccountType.vue';
  import accountTypeList from '@/constant/accountTypeList';


  const weekOfYear = require('dayjs/plugin/weekOfYear');
  dayjs.extend(weekOfYear);


  @Component({
    components: {AccountType, Tabs, Tag}
  })
  export default class Accounts extends Vue {
    outInList = outInList;
    type = '-';
    dateList = accountDateList;
    date = 'day';
    accountTypeList = accountTypeList;

    newRecordTreeDay(date: dayjs.OpUnitType, type: string) {
      return store.fetchNewRecordTree(date, type);
    }

  }

</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .accountWrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
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