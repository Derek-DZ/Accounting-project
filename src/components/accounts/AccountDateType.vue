<template>
  <ul class="accountList" v-if="recordTree.length>0">
    <li class="accountTitle" v-for="record in recordTree"
        :key="record.id">
      <h3 class="title">{{beautifyWeek(record.title)}}</h3>
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
  import {Component, Prop} from 'vue-property-decorator';
  import dayjs from 'dayjs';
  import Tag from '@/components/Tag.vue';
  const weekOfYear = require('dayjs/plugin/weekOfYear')
  dayjs.extend(weekOfYear)
  @Component({
    components: {Tag}
  })
  export default class AccountType extends Vue {
    @Prop() recordTree!: RecordTree;
    @Prop(String) type!: string;

    beautifyWeek(string: string) {
      const week = dayjs(string).week().toString();
      const today = dayjs();
      if (week.isSame(today, 'week')) {
        return '本周';
      } else if (week.isSame(today, 'year')) {
        return week.format('M月D日');
      } else {
        return week.format('YYYY年M月D日');
      }
    }

    beautifyTime(string: string) {
      return dayjs(string).format('HH:mm');
    }
  }

</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .accountList {
    background-color: $color-box;
    border-radius: 10px;
    margin-top: -8px;
    min-height: 5vh;
    overflow-y: scroll;
    padding-top: 5px;
    z-index: 10;

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