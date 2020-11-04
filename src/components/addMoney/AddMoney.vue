<template>
  <div class="addMoney">
    {{record}}
    <NumberPad :value.sync="record.number" :time.sync="record.time" :type="record.type" :tag-name="record.tagName" @submit="saveRecord"/>
    <OutIn :value.sync="record.type" />
    <Note :value="record.note" @update:value="onUpdateNote"/>
    <Tags :value.sync="record.tagName" />
    <div class="hide" @click="hide"></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import Tag from '@/components/Tag.vue';
  import NumberPad from '@/components/addMoney/NumberPad.vue';
  import Note from '@/components/addMoney/Note.vue';
  import OutIn from '@/components/addMoney/OutIn.vue';
  import Tags from '@/components/addMoney/Tags.vue';

  type Record = {
    type: string;
    number: number;
    tagName: string;
    note: string;
    time: string;
  }
  @Component({
    components: {Tags, OutIn, Note, NumberPad, Tag}
  })
  export default class AddMoney extends Vue {
    record: Record = {
      type: '-',
      number: 0,
      tagName: 'clothes',
      note: '',
      time: ''
    };
    recordList: Record[] = [];
    hide() {
      const addMoney = document.querySelector('.addMoney') as HTMLDivElement;
      addMoney.style.top = '100%';
      addMoney.style.bottom = '-100%';
    }

    onUpdateNote(value: string) {
      this.record.note = value;
    }

    saveRecord(){
      const recordClone = JSON.parse(JSON.stringify(this.record));
      this.recordList.push(recordClone);
      console.log(this.recordList)
    }

    @Watch('recordList')
    onRecordListChange(){
      localStorage.setItem('recordList', JSON.stringify(this.recordList));
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .addMoney {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    border-radius: 50px;
    background-color: white;
    width: 95%;
    left: 2.5%;
    position: absolute;
    transition: top 1s, bottom 1s;
    bottom: 0;

    > .hide {
      width: 48px;
      height: 6px;
      background-color: $color-background;
      margin-top: 10px;
      border-radius: 5px;
    }
  }

</style>