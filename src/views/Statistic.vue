<template>
  <div class="wrapper">
    <Header/>
    <Money/>
    <layout/>
    <Tabs :data-source="outInList" class-prefix="statisticOutIn" :value.sync="outInValue"/>
    <Tabs :data-source="dateList" class-prefix="statisticDate" :value.sync="dateValue"/>
    <ECharts :options="chartOption"/>
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
  import store from '@/store/index2';

  import statisticDateList from '@/constant/statisticDateList';
  import tagsList from '@/constant/tagsList';
  import {OpUnitType} from 'dayjs';

  @Component({
    components: {ECharts, Tabs, Header, Money}
  })
  export default class Statistic extends Vue {
    outInList = outInList;
    outInValue = '-';
    dateList = statisticDateList;
    dateValue = 'day' as OpUnitType;

    get tagsList() {
      const newTagsList: string[] = [];
      for (let i = 0; i < tagsList.length; i++) {
        newTagsList.push(tagsList[i].value);
      }
      return newTagsList;
    }
    get chartOption() {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: this.tagsList
        },
        grid: {
          left: '4%',
          right: '8%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: this.chartLabels
        },
        series: [
          {
            name: '衣',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#fe7547',
            data: this.chartData[0]
          },
          {
            name: '食',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#f1d4cb',
            data: this.chartData[1]
          },
          {
            name: '住',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#612635',
            data: this.chartData[2]
          },
          {
            name: '行',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#a33cbf',
            data: this.chartData[3]
          },
          {
            name: '学习',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#2bc1ff',
            data: this.chartData[4]
          },
          {
            name: '娱乐',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#7b6cff',
            data: this.chartData[5]
          },
          {
            name: '工作',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#ba0040',
            data: this.chartData[6]
          },
          {
            name: '医疗',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#ea0300',
            data: this.chartData[7]
          },
          {
            name: '其他',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#5f5f5f',
            data: this.chartData[8]
          },
        ]
      };
    }

    get chartData() {
      return store.fetchChartData(this.outInValue, this.dateValue);
    }

    get chartLabels() {
      return store.fetchChartLabels(this.dateValue);
    }
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