<template>
  <div class="chartsWrapper">
    <div class="charts" ref="container"></div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import echarts from 'echarts';

  @Component
  export default class ECharts extends Vue {
    @Prop() option!: echarts.EChartOption;


    mounted(){
      if(this.option === undefined){
        return console.error('options 为空')
      }
      console.log(this.option);
      const myChart = echarts.init(this.$refs.container as HTMLDivElement)
      myChart.setOption(this.option)
    }

    // mounted() {
    //   this.charts = echarts.init((this.$refs.container) as HTMLDivElement);
    //
    //   this.charts.setOption(this.option);
    // }


  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .chartsWrapper{
    margin-top: -8px;
    position: relative;
    z-index: 10;
    display: flex;
    border-radius: 10px;
    flex-grow: 1;
    width: 100%;
    background-color: $color-box;
    >.charts {
      margin-top: 10px;
      flex-grow: 1;
    }
  }

</style>