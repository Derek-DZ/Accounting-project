<template>
  <div class="accountWrapper">
    <Tabs :data-source="outInList" class-prefix="accountsOutIn" :value.sync="type"
    />
    <!--    <Tabs :data-source="dateList" class-prefix="accountsDate" :value.sync="date"/>-->
    <ul class="accountList">
      <li v-show="type==='-' && outlayRecordTree.length>0" class="accountTitle" v-for="record in outlayRecordTree" :key="record.id">
        <h3 class="title">{{beautifyDate(record.title)}}</h3>
        <ul>
          <li v-for="item in record.data" :key="item.id" class="account">
            <Tag :tag-name="item.tagName"/>
            <div class="test-wrapper">
              <span class="accountNote">{{ item.note }}</span>
              <span class="accountTime">{{ beautifyTime(item.date) }}</span>
            </div>
            <span class="accountMoney">{{ item.type }}￥{{ item.number }}</span>
          </li>
        </ul>
      </li>
      <li v-show="type==='+' && incomeRecordTree.length>0" class="accountTitle" v-for="record in incomeRecordTree" :key="record.id">
        <h3 class="title">{{beautifyDate(record.title)}}</h3>
        <ul>
          <li v-for="item in record.data" :key="item.id" class="account">
            <Tag :tag-name="item.tagName"/>
            <div class="test-wrapper">
              <span class="accountNote">{{ item.note }}</span>
              <span class="accountTime">{{ beautifyTime(item.date) }}</span>
            </div>
            <span class="accountMoney">{{ item.type }}￥{{ item.number }}</span>
          </li>
        </ul>
      </li>
    </ul>
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
  import dateList from '@/constant/dateList';
  import Tabs from '@/components/Tabs.vue';

  @Component({
    components: {Tabs, Tag}
  })
  export default class Accounts extends Vue {
    outInList = outInList;
    type = '-';
    dateList = dateList;
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

    get recordListTree() {
      return store.fetchRecordListTree();
    }

    get outlayRecordTree() {
      return store.fetchOutlayRecordTree();
    }

    get incomeRecordTree() {
      return store.fetchIncomeRecordTree();
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
    > .accountList {
      position: relative;
      background-color: $color-box;
      border-radius: 10px;
      margin-top: -5px;
      min-height: 5vh;
      z-index: 10;
      overflow-y: scroll;
      padding-top: 5px;

      > .accountTitle {
        padding: 5px;
        justify-content: start;
        margin: 2px 8px 2px 8px;

        > .title {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background-color: $color-background;
          padding-left: 5px;

          > .icon {
            margin-right: 8px;
          }
        }

        > ul {
          > .account {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            margin: 5px;
            background-color: white;
            border-radius: 10px;

            > .tag {
              margin-right: 10px;
            }

            > .test-wrapper {
              display: flex;
              flex-direction: column;
              font-family: $font-hei;

              > .accountNote {
                height: 20px;
                line-height: 22px;
                font-size: 13px;
              }

              > .accountTime {
                height: 20px;
                line-height: 22px;
                font-size: 13px;
              }
            }

            > .accountMoney {
              flex-grow: 1;
              align-self: center;
              text-align: end;
              margin-right: 10px;
            }
          }
        }
      }
    }
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


  }
</style>