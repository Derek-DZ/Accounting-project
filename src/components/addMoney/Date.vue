<template>
  <div class="date">
    <span>时间</span>
    <label>
      <input type="date" v-model="date">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';

  @Component
  export default class Time extends Vue {

    date = this.format((new Date()).toLocaleDateString());

    format(oldDate: string) {
      const list = oldDate.split('/');
      if (list[1].length < 2) {
        list[1] = '0' + list[1];
      }
      if (list[2].length < 2) {
        list[2] = '0' + list[2];
      }
      return list.join('-');
    }

    @Watch('date')
    onDateChange(value: string) {
      console.log(this.date);
      this.$emit('update:value', value);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .date {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 98%;
    font-size: 16px;
    background-color: $color-background;
    margin-bottom: 2px;

    > span {
      padding: 8px 16px;
    }

    > label {
      flex-grow: 1;

      > input {
        align-self: center;
        width: 99%;
        border: none;
        background-color: $color-box;
        padding: 6px;
        outline: none;
      }
    }
  }
</style>