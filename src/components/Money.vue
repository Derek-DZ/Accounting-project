<template>
  <div class="money-wrapper">
    <div class="money">
      <div class="today">
        <span class="todayText">今日</span>
        <Tabs :data-source="outInList" class-prefix="today" :value.sync="name"/>
      </div>
      <div class="today-money" v-for="money in todayMoneyList" :key="money.name"
           :class="{selected: name === money.name}">
        <span class="symbol">{{money.name}}￥</span>
        <span class="number">{{money.value}}</span>
      </div>
    </div>
    <div class="add-money" @click="visible">
      <Icon name="add"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import AddMoney from '@/components/addMoney/AddMoney.vue';
  import store from '@/store/index2';
  import dayjs from 'dayjs';
  import Tabs from '@/components/Tabs.vue';
  import outInList from '@/constant/outInList';

  @Component({
    components: {Tabs, AddMoney}
  })
  export default class Money extends Vue {
    name = '-';
    outInList = outInList;
    todayMoneyList: { name: string; value: number }[] = [
      {
        name: '-',
        value: this.todayNumber && this.todayNumber[0]
      },
      {
        name: '+',
        value: this.todayNumber && this.todayNumber[1]
      }
    ];

    visible() {
      const addMoney = document.querySelector('.addMoney') as HTMLDivElement;
      addMoney.style.display = 'flex';
      setTimeout(()=>{
        addMoney.style.top = 'auto';
        addMoney.style.bottom = '0';
      },0)
    }

    get recordListTree() {
      return store.fetchRecordListTree('day');
    }

    get todayNumber() {
      if (this.recordListTree.length === 0) {return 0;}
      const todayRecordList = this.recordListTree[0].data;
      let todayOutlay = 0;
      let todayIncome = 0;
      if (dayjs(todayRecordList[0].date).isSame(dayjs(), 'day')) {
        for (let i = 0; i < todayRecordList.length; i++) {
          if (todayRecordList[i].type === '-') {
            todayOutlay += parseFloat(todayRecordList[i].number) || 0;
          } else {
            todayIncome += parseFloat(todayRecordList[i].number) || 0;
          }
        }
        return [todayOutlay, todayIncome];
      } else {
        return 0;
      }
    }

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .money-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0px;
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 20px;
    padding: 15px;
    background-color: white;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));

    > .money {
      margin-left: 15px;

      > .today {
        display: flex;
        font-size: 14px;
        font-weight: bold;

        > .todayText {
          width: 8vh;
          align-self: center;
        }
      }

      > .today-money.selected {
        display: block;
      }

      > .today-money {
        display: none;
        font-size: 40px;
        font-weight: bold;
        margin-top: 5px;
        font-family: Consolas, monospace;

        > .symbol {
          font-size: 20px;
          font-family: Microsoft YaHei UI, serif;
          margin-right: 5px;
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

  ::v-deep {
    .tabs {

      > li.selected {
        color: $color-highLight;
        border: none;
        box-shadow: none;
      }

      > .today-tab-item {
        font-size: 14px;
        border: none;
        background: none;
        padding: 0px;

        > .icon {
          display: none;
        }
      }

    }
  }
</style>