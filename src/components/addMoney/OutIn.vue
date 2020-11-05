<template>
  <ul class="out-in">
    <li @click="onTypeChanged('-')" :class="{selected: value==='-'}">
      <Icon name="outlay"/>
      支出
    </li>
    <li @click="onTypeChanged('+')" :class="{selected: value==='+'}">
      <Icon name="income"/>
      收入
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class OutIn extends Vue {
    @Prop() readonly value!: string;

    onTypeChanged(type: string) {
      this.$emit('update:value', type);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .out-in {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-right: 1px;

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