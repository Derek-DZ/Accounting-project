<template>
  <ul class="tabs" :class="classPrefix+'-tabs'">
    <li class="tab" v-for="item in dataSource" :key="item.text" @click="select(item)"
        :class="{selected: item.value===value, [classPrefix+'-tab-item']: classPrefix, [item.name+'-tab-item']:item.name}">
      <Icon :name="item.name"/>
      {{item.text}}
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type DataSourceItem = { text: string; value: string; name?: string }
  @Component
  export default class Tabs extends Vue {
    @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
    @Prop() classPrefix?: string;
    @Prop() value!: string;

    select(item: DataSourceItem) {
      this.$emit('update:value', item.value);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tabs {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-right: 1px;

    .tab {
      outline: none;
      flex-grow: 1;
      padding: 5px;
      font-size: 18px;
      font-weight: bold;
      color: $color-lowLight;
      text-align: center;
      margin: 1px;
      border-top: 2px solid $color-background;
      border-left: 2px solid $color-background;
      border-right: 2px solid $color-background;
      background: $color-box;
      border-radius: 60px 60px 0 0;

      > .icon {
        width: 1.5em;
      }
    }

    > li.selected {
      color: $color-highLight;
      background-color: white;
      border-top: 3px solid $color-theme;
      border-left: 3px solid $color-theme;
      border-right: 3px solid $color-theme;
      box-shadow: 2px 0 2px $color-shadow;
    }
  }
</style>