<template>
  <ul class="accountList">
    <li class="account" v-for="record in recordListTree" :key="record.title">
      <h3 class="title">{{beautifyDate(record.title)}}</h3>
      <ul>
        <li v-for="item in record.data" :key="item.id" class="record">
          <Tag :tag-name="item.tagName"/>
          <div class="test-wrapper">
            <span class="accountNote">{{ item.note }}</span>
            <span class="accountTime">{{ beautifyTime(item.date) }}</span>
          </div>
          <p class="accountMoney">{{ item.type }}￥{{ item.number }}</p>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import store from '@/store/index2';
  import clone from '@/lib/clone';
  import dayjs from 'dayjs';
  import Tag from '@/components/Tag.vue';
  @Component({
    components: {Tag}
  })
  export default class Accounts extends Vue {
    beautifyDate(string: string){
      const day = dayjs(string)
      const today = dayjs()
      if (day.isSame(today, 'day')){
        return '今天';
      }else {
        return day.format('YYYY年M月D日')
      }
    }
    beautifyTime(string: string){
      return dayjs(string).format('HH:mm')
    }

    get recordList() {
      return store.fetchRecords();
    }

    get recordListTree() {
      if (this.recordList.length === 0) {return [];}
      type RecordTree = { title: string; data: RecordItem[] }[]
      const newRecordList: RecordItem[] = clone(this.recordList).sort((a: RecordItem, b: RecordItem) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf());
      const recordTree: RecordTree = [{
        title: newRecordList[0].date,
        data: [newRecordList[0]]
      }];
      for (let i = 0; i < newRecordList.length - 1; i++) {
        const current = newRecordList[i + 1];
        const last = recordTree[recordTree.length - 1];
        if (dayjs(current.date).isSame(dayjs(last.title), 'date')) {
          last.data.push(current);
        } else {
          recordTree.push({title: current.date, data: [current]});
        }
      }
      return recordTree;
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
    max-height: 55vh;
    overflow: scroll;

    > .account {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 5px;
      justify-content: start;
      margin: 10px 8px 10px 8px;

      > figure {
        margin: 5px;
        display: flex;
        justify-content: center;
        width: 32px;
        height: 32px;
        background-color: $color-food;
        border-radius: 10px;

        > .icon {
          width: 20px;
          height: 20px;
          align-self: center;
          color: #fff;
        }
      }

      > .test-wrapper {
        display: flex;
        flex-direction: column;
        margin-left: 5px;

        > span {
          font-size: 12px;
          margin-left: 0;
        }

        > .accountTime {
          margin-top: 4px;
          color: $color-lowLight;
        }
      }

      > .accountMoney {
        align-self: center;
        flex-grow: 1;
        text-align: right;
      }
    }
  }
</style>