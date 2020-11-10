<template>
  <div class="wrapper">
    <Header/>
    <Money/>
    <layout/>
    <Tabs :data-source="outInList" class-prefix="statisticOutIn" :value.sync="outInValue"/>
    <Tabs :data-source="dateList" class-prefix="statisticDate" :value.sync="dateValue"/>
    <ECharts :option="chartOption"/>
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
    dateList = statisticDateList;
    dateValue = 'day';

    get chartOption() {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['衣', '食', '住', '行', '学习', '娱乐', '工作', '医疗', '其他']
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
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: '食',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#f1d4cb',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '住',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#612635',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '行',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#a33cbf',
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: '学习',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#2bc1ff',
            data: [320, 332, 401, 434, 590, 530, 720]
          },
          {
            name: '娱乐',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#7b6cff',
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: '工作',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#ba0040',
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: '医疗',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#ea0300',
            data: [1500, 212, 201, 154, 190, 330, 410]
          },
          {
            name: '其他',
            type: 'bar',
            stack: '总量',
            label: {
              position: 'insideRight'
            },
            color: '#5f5f5f',
            data: [150, 212, 201, 154, 190, 330, 410]
          },
        ]
      };
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