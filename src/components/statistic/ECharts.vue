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
      console.log(this.option);
    }

    // mounted() {
    //   this.charts = echarts.init((this.$refs.container) as HTMLDivElement);
    //
    //   this.charts.setOption(this.option);
    // }


  }
</script>

<style lang="scss" scoped>
  .chartsWrapper{
    border: 1px solid red;
    flex-grow: 1;
    width: 100%;
    >.charts {
      width: 90%;
      height: 100%;
      border: 1px solid red;
    }
  }

</style>