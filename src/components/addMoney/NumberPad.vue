<template>
  <div class="numberPad">
    <div class="output">
      <span class="number">{{type}}{{number}}</span>
      <Tag :tag-name="tagName"/>
    </div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="backspace">
        <Icon name="backspace"/>
      </button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button class="ok" @click="enter">
        <Icon name="enter"/>
      </button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="zero" @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import Tag from '@/components/Tag.vue';
  import Note from '@/components/addMoney/Note.vue';

  @Component({
    components: {Tag, Note}
  })

  export default class NumberPad extends Vue {
    @Prop() tagName!: string;
    @Prop() type!: string;
    @Prop() readonly value!: string;

    number = this.value;

    inputContent(event: TouchEvent | MouseEvent) {
      const button = (event.target as HTMLButtonElement);
      const input: string = button.textContent || '';
      if (this.number === '0' && input !== '.') {
        this.number = input;
      } else if (this.number.indexOf('.') !== -1 && input === '.') {
        return;
      } else if (this.number.length >= 10 || this.number.slice(-3, -2) === '.') {
        return;
      } else {
        this.number += input;
      }
    }

    backspace() {
      if (this.number.length === 1) {
        this.number = '0';
      } else {
        this.number = this.number.substring(0, this.number.length - 1);
      }
    }

    enter() {
      this.$emit('update:value', this.number);
      if (this.number === '0'){
        window.alert("请输入金额")
      }else{
        this.$emit('submit', this.number);

      }

    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .numberPad {
    border-radius: 0 0 50px 50px;
    width: 100%;
    background-color: white;
    z-index: 10;

    > .output {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 10px;
      margin-right: 10px;
      line-height: 70px;
      height: 70px;

      > .number {
        flex-grow: 1;
        text-align: end;
        font-size: 40px;
        font-weight: bold;
        font-family: Consolas, monospace;
        padding-right: 16px;
      }
    }

    > .buttons {
      @extend %clearFix;
      font-size: 24px;
      color: #333333;

      > button {
        border: 1px solid #d4d4d4;
        background-color: white;
        float: left;
        width: 25%;
        height: 7.5vh;
        font-family: Consolas, monospace;
        outline: none;

        &.ok {
          height: 22.5vh;
          float: right;
          border-radius: 0 0 50px 0;
          background-color: $color-theme;
        }

        &.zero {
          width: 50%;
          border-radius: 0 0 0 50px;
        }
      }
    }
  }
</style>