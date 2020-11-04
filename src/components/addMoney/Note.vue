<template>
  <div class="node">
    <span>备注</span>
    <label>
      <input type="text" v-model="value" placeholder="在这里添加备注">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';

  @Component
  export default class Note extends Vue {
    value='';
    @Watch('value')
    onValueChanged(value: string){
      this.$emit('update:value', value);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .node {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 98%;
    font-size: 16px;
    background-color: $color-background;
    margin-bottom: 2px;

    > span {
      padding: 16px;
    }

    > label {
      flex-grow: 1;

      > input {
        align-self: center;
        width: 99%;
        border: none;
        background-color: $color-box;
        padding: 16px;
        outline: none;
      }
    }
  }
</style>