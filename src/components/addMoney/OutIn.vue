<template>
  <ul class="out-in">
    <li class="out selected" @click="select">
      <Icon name="out"/>
      支出
    </li>
    <li class="in" @click="select">
      <Icon name="in"/>
      收入
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class OutIn extends Vue {
    type = '-';

    select() {
      const liOut = document.querySelector('.out') as HTMLLIElement;
      const liIn = document.querySelector('.in') as HTMLLIElement;
      liOut.classList.toggle('selected');
      liIn.classList.toggle('selected');
      if (liOut.classList.length >= 2) {
        this.type = '-';
      } else {
        this.type = '+';
      }
      this.$emit('xxx', this.type);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .out-in {
    display: flex;
    justify-content: space-around;
    width: 100%;

    > li {
      outline: none;
      flex-grow: 1;
      padding: 5px;
      font-size: 20px;
      font-weight: bold;
      color: $color-lowLight;
      text-align: center;
      margin: 2px 1px 1px 1px;
      border: 1px solid transparent;
      background: $color-box;
      box-shadow: 1px 1px rgba(50, 50, 50, .5);

      > .icon {
        width: 1.5em;
      }
    }

    > li.selected {
      color: $color-highLight;
      box-shadow: inset 1px 1px rgba(50, 50, 50, .5);
    }
  }
</style>