<template>
  <div class="addMoney">
    <NumberPad :value.sync="record.number" :type="record.type" :tag-name="record.tagName"
               @submit="saveRecord"/>
    <Tabs :data-source="outInList" class-prefix="addMoney" :value.sync="record.type"/>
    <Date @update:value="onUpdateDate"/>
    <Note :value.sync="record.note"/>
    <Tags :value.sync="record.tagName"/>
    <div class="hide" @click="hide">
      <Icon name="close" />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import Tag from '@/components/Tag.vue';
  import NumberPad from '@/components/addMoney/NumberPad.vue';
  import Note from '@/components/addMoney/Note.vue';
  import Tags from '@/components/addMoney/Tags.vue';
  import Date from '@/components/addMoney/Date.vue';
  import store from '@/store/index2.ts';
  import Tabs from '@/components/Tabs.vue';
  import outInList from '@/constant/outInList';


  @Component({
    components: {Tabs, Date, Tags, Note, NumberPad, Tag},
    computed: {
      recordList() {
        return store.recordList;
      }
    }
  })
  export default class AddMoney extends Vue {

    record: RecordItem = {
      type: '-',
      number: '0',
      tagName: 'clothes',
      note: '',
      date: ''
    };
    outInList = outInList;

    hide() {
      const addMoney = document.querySelector('.addMoney') as HTMLDivElement;
      addMoney.style.top = '100%';
      addMoney.style.bottom = '-100%';
      setTimeout(() => {
        addMoney.style.display = 'none';
      }, 200);
    }

    onUpdateDate(value: string) {
      this.record.date = value;
    }

    saveRecord() {
      if (this.record.date === '') {
        alert('请选择日期');
      } else {
        store.createRecord(this.record);
        window.alert('账单已添加');
        this.record.type = '-';
        this.record.note = '';
        this.hide();
        this.$router.push('/temporary');
      }
    }

    @Watch('record.type')
    onTypeChange() {
      if (this.record.type === '+') {
        this.record.tagName = 'work';
      } else {
        this.record.tagName = 'clothes';
      }
    }

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .addMoney {
    display: none;
    flex-direction: column-reverse;
    align-items: center;
    border-radius: 50px;
    border-top: 2px solid rgb(252, 116, 71, .5);
    background-color: white;
    width: 95%;
    left: 2.5%;
    position: absolute;
    transition: top .5s, bottom .5s;
    bottom: -100%;
    z-index: 11;

    > .hide {
      width: 48px;
      height: 6px;
      background-color: $color-background;
      margin-top: 10px;
      border-radius: 5px;
      display: flex;
      justify-content: center;

      > .icon {
        align-self: center;
        height:15px;
        opacity: 60%;
        animation: .5s linear .1s infinite alternate close;
      }
      @keyframes close{
        from{transform: translateY(-3px)}
        to{transform: translateY(3px)}
      }
    }
  }

  ::v-deep {
    .addMoney-tabs {
      justify-content: center;
      transform: translateY(2px);

      > .addMoney-tab-item {
        border-color: $color-box;
      }

      > .income-tab-item {
        transform: translateX(-20px);
      }

      > .outlay-tab-item {
        transform: translateX(20px);
      }

      > .addMoney-tab-item.selected {
        background-color: white;
        z-index: 1;
      }
    }

  }
</style>