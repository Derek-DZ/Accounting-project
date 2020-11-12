<template>
  <div class="chartsWrapper">
    <div class="charts" ref="container"></div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  import echarts from 'echarts';

  @Component
  export default class ECharts extends Vue {
    @Prop() options!: echarts.EChartOption;
    myChart!: echarts.ECharts;

    mounted() {
      if (this.options === undefined) {
        return console.error('options 为空');
      }
      this.myChart = echarts.init(this.$refs.container as HTMLDivElement);
      this.myChart.setOption(this.options);
    }

    @Watch('options')
    onOptionsChanged(newValue: echarts.EChartOption) {
      this.myChart.setOption(newValue, true);
    }

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .chartsWrapper {
    margin-top: -8px;
    position: relative;
    z-index: 10;
    display: flex;
    border-radius: 10px;
    flex-grow: 1;
    width: 100%;
    background-color: $color-box;

    > .charts {
      margin-top: 10px;
      flex-grow: 1;
    }
  }

</style>