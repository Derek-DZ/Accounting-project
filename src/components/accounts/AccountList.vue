<template>
  <div class="accountWrapper">
<!--    {{outlayRecordWeekTree}}-->
    <Tabs :data-source="outInList" class-prefix="accountsOutIn" :value.sync="type"
    />
        <Tabs :data-source="dateList" class-prefix="accountsDate" :value.sync="date"/>
        <AccountType :record-tree="outlayRecordTree" :type="this.type" v-show="type==='-'"/>
        <AccountType :record-tree="incomeRecordTree" :type="this.type" v-show="type==='+'"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  import store from '@/store/index2';
  import clone from '@/lib/clone';
  import dayjs from 'dayjs';
  import Tag from '@/components/Tag.vue';
  import outInList from '@/constant/outInList';
  import dateList from '@/constant/accountDateList';
  import Tabs from '@/components/Tabs.vue';
  import accountDateList from '@/constant/accountDateList';
  import AccountType from '@/components/accounts/AccountType.vue';

  @Component({
    components: {AccountType, Tabs, Tag}
  })
  export default class Accounts extends Vue {
    outInList = outInList;
    type = '-';
    dateList = accountDateList;
    date = 'day';

    beautifyDate(string: string) {
      const day = dayjs(string);
      const today = dayjs();
      if (day.isSame(today, 'day')) {
        return '今天';
      } else if (day.isSame(today, 'year')) {
        return day.format('M月D日');
      } else {
        return day.format('YYYY年M月D日');
      }
    }

    beautifyTime(string: string) {
      return dayjs(string).format('HH:mm');
    }

    get outlayRecordTree() {
      return store.fetchOutlayRecordTree();
    }

    get incomeRecordTree() {
      return store.fetchIncomeRecordTree();
    }

    // get outlayRecordWeekTree(){
    //   console.log(store.fetchOutlayRecordWeekTree());
    //   return store.fetchOutlayRecordWeekTree();
    // }

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