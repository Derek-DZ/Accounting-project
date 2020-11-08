<template>
  <ul class="accountList">
    <li class="accountTitle" v-for="record in recordListTree" :key="record.title">
      <h3 class="title">{{beautifyDate(record.title)}}
        <!--        <Icon name="open"/>-->
      </h3>
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
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import store from '@/store/index2';
  import clone from '@/lib/clone';
  import dayjs from 'dayjs';
  import Tag from '@/components/Tag.vue';

  @Component({
    components: {Tag}
  })
  export default class Accounts extends Vue {
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

    get recordListTree(){
      return store.fetchRecordListTree()
    }
  }

</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .accountList {
    background-color: $color-box;
    border-radius: 10px;
    margin-top: -8px;
    z-index: 10;
    max-height: 58vh;
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

</style>