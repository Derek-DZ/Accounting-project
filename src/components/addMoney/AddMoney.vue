<template>
  <div class="addMoney">
    <NumberPad/>
    <OutIn @update:vlaue="type"/>
    <Note/>
    <Tags/>
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
    iconName: string;
    note: string;
  }
  @Component({
    components: {Tags, OutIn, Note, NumberPad, Tag}
  })
  export default class AddMoney extends Vue {
    @Prop() tags!: string[];
    @Prop() type!: string;
    @Prop() number!: string;
    @Prop() iconName!: string;
    @Prop() note!: string;
    hide(){
      const addMoney = document.querySelector('.addMoney') as HTMLDivElement;
      console.log(addMoney)
      addMoney.style.top = '100%';
      addMoney.style.bottom = '-100%';
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .addMoney {
    border: 1px solid red;
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