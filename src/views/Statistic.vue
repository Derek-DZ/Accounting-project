<template>
  <div class="wrapper">
    <Header/>
    <Money/>
    <layout/>
    <Tabs :data-source="outInList" class-prefix="statisticOutIn" :value.sync="outInValue"/>
        <Tabs :data-source="dateList" class-prefix="statisticDate" :value.sync="dateValue"/>
<!--    <ECharts :option="option"/>-->
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Money from '@/components/Money.vue';
  import Header from '@/components/Header.vue';
  import Tabs from '@/components/Tabs.vue';
  import outInList from '@/constant/outInList';
  import ECharts from '@/components/statistic/ECharts.vue';
  // import echartsDataList from '@/constant/echartsDataList';

  import statisticDateList from '@/constant/statisticDateList';


  @Component({
    components: {ECharts, Tabs, Header, Money}
  })
  export default class Statistic extends Vue {
    outInList = outInList;
    outInValue = '-';
    dateList = statisticDateList
    dateValue = 'day'


  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 98vh;
    margin: 8px;
  }

  ::v-deep {
    .statisticOutIn-tabs {
      > .statisticOutIn-tab-item {
        padding: 3px;
        font-size: 16px;
      }

      > .income-tab-item {
        transform: translateX(-20px);
      }

      > .outlay-tab-item {
        transform: translateX(20px);
      }

      > .statisticOutIn-tab-item.selected {
        background-color: $color-box;
        z-index: 1;
      }
    }

    .statisticDate-tabs {
      transform: translateY(-5px);
      z-index: 2;

      > .statisticDate-tab-item {
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

      > .statisticDate-tab-item.selected {
        background-color: $color-box;
        z-index: 3;
      }
    }

  }
</style>