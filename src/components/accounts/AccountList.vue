<template>
  <div class="accountWrapper">
    <Tabs :data-source="outInList" class-prefix="accountsOutIn" :value.sync="type"
    />
    <Tabs :data-source="dateList" class-prefix="accountsDate" :value.sync="date"/>
    <AccountType :record-tree="outlayRecordTreeDay" :type="this.type" v-show="type==='-'&& date==='day'"
                 :beautify-title="this.beautifyDate" :beautify-account="this.beautifyTime"/>
    <AccountType :record-tree="incomeRecordTreeDay" :type="this.type" v-show="type==='+'&& date==='day'"
                 :beautify-title="this.beautifyDate" :beautify-account="this.beautifyTime"/>
    <AccountType :record-tree="outlayRecordTreeWeek" :type="this.type" v-show="type==='-'&& date==='week'"
                 :beautify-title="this.beautifyWeek" :beautify-account="this.beautifyDate"/>
    <AccountType :record-tree="incomeRecordTreeWeek" :type="this.type" v-show="type==='+'&& date==='week'"
                 :beautify-title="this.beautifyWeek" :beautify-account="this.beautifyDate"/>
    <AccountType :record-tree="outlayRecordTreeMonth" :type="this.type" v-show="type==='-'&& date==='month'"
                 :beautify-title="this.beautifyMonth" :beautify-account="this.beautifyDate"/>
    <AccountType :record-tree="incomeRecordTreeMonth" :type="this.type" v-show="type==='+'&& date==='month'"
                 :beautify-title="this.beautifyMonth" :beautify-account="this.beautifyDate"/>
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

    beautifyWeek(string: string) {
      const week = dayjs(string);
      const thisWeek = dayjs();
      if (week.isSame(thisWeek, 'week')) {
        return '本周';
      } else if (week.week() === (thisWeek.week() - 1)) {
        return '上周';
      } else if (week.isSame(thisWeek, 'year')) {
        return (week.startOf('w').format('M月D日') + " - " + week.endOf('w').format('M月D日'))
      } else {
        return (week.startOf('w').format('YYYY年M月D日') + " - " + week.endOf('w').format('YYYY年M月D日'))
      }
    }

    beautifyMonth(string: string) {
      const month = dayjs(string);
      const thisWeek = dayjs();
      if (month.isSame(thisWeek, 'month')) {
        return '本月';
      } else if (month.month() === (thisWeek.month() - 1)) {
        return '上月';
      } else if (month.isSame(thisWeek, 'year')) {
        return (month.startOf('m').format('M月D日') + " - " + month.endOf('m').format('M月D日'))
      } else {
        return (month.startOf('m').format('YYYY年M月D日') + " - " + month.endOf('m').format('YYYY年M月D日'))
      }
    }

    get outlayRecordTreeDay() {
      return store.fetchNewRecordTree('day', '-');
    }

    get incomeRecordTreeDay() {
      return store.fetchNewRecordTree('day', '+');
    }

    get outlayRecordTreeWeek() {
      return store.fetchNewRecordTree('week', '-');
    }

    get incomeRecordTreeWeek() {
      return store.fetchNewRecordTree('week', '+');
    }

    get outlayRecordTreeMonth() {
      return store.fetchNewRecordTree('month', '-');
    }

    get incomeRecordTreeMonth() {
      return store.fetchNewRecordTree('month', '+');
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