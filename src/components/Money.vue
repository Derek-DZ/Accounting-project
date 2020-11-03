<template>
  <div class="money-wrapper">
    <div class="money">
      <span class="today">Today</span>
      <div class="today-money">
        <span>￥</span>
        {{ todayMoney }}
      </div>
    </div>
    <div class="add-money">
      <Icon name="add" />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Money extends Vue {
    @Prop(Number) todayMoney: number | undefined = 0;
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .money-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 20px;
    padding: 15px;
    background-color: white;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));

    > .money {
      margin-left: 15px;
      > .today {
        font-size: 12px;
        font-weight: bold;
      }
      > .today-money {
        font-size: 40px;
        font-weight: bold;
        margin-top: 5px;
        font-family: Consolas, monospace;
        > span {
          font-size: 20px;
          font-family: Microsoft YaHei UI,serif;
        }
      }
    }

    > .add-money {
      display: flex;
      justify-content: center;
      width: 45px;
      height: 45px;
      align-self: center;
      border-radius: 15px;
      margin-right: 10px;
      background-color: $color-theme;
      > .icon {
        align-self: center;
        width: 20px;
        height: 20px;
      }
    }
  }
</style>