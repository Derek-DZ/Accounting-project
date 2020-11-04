<template>
  <div class="addMoney">
    <NumberPad @update:value="onUpdateNumber" :type="this.type" :tag-name="this.tagName"/>
    <OutIn @update:value="onUpdateType"/>
    <Note @update:value="onUpdateNote"/>
    <Tags @update:value="onUpdateTag"/>
    <div class="hide" @click="hide"></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import Tag from '@/components/Tag.vue';
  import NumberPad from '@/components/addMoney/NumberPad.vue';
  import Note from '@/components/addMoney/Note.vue';
  import OutIn from '@/components/addMoney/OutIn.vue';
  import Tags from '@/components/addMoney/Tags.vue';

  type Record = {
    tags: string[];
    type: string;
    number: string;
    tagName: string;
    note: string;
  }
  @Component({
    components: {Tags, OutIn, Note, NumberPad, Tag}
  })
  export default class AddMoney extends Vue {
    // @Prop() tags!: string[];
    type = '-';
    // @Prop() number!: string;
    tagName = 'clothes';

    // @Prop() note!: string;
    hide() {
      const addMoney = document.querySelector('.addMoney') as HTMLDivElement;
      addMoney.style.top = '100%';
      addMoney.style.bottom = '-100%';
    }

    onUpdateType(value: string) {
      this.type = value;
    }

    onUpdateNote(value: string) {
      console.log(value);
    }

    onUpdateTag(value: string) {
      this.tagName = value;
    }

    onUpdateNumber(value: string) {
      console.log(value);
    }

    // @Prop() record: Record = {
    //   tags: [],
    //   type: '-',
    //   number: '0',
    //   tagName: 'clothes',
    //   note: ''
    // }
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