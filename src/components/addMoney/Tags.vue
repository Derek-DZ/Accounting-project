<template>
  <ul class="tags">
    <li v-for="(tag,index) in tagsTable" :key="tag" @click="onToggle(index)" >
      <Tag :tag-name="index" :class="{selected: value===index}"/>
      {{tag}}
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator';
  import Tag from '@/components/Tag.vue';

  @Component({
    components: {Tag}
  })
  export default class Tags extends Vue {
    tagsTable = {
      'clothes': '衣',
      'food': '食',
      'room': '住',
      'travel': '行',
      'medical': '医疗',
      'other': '其他',
    };

    @Prop() readonly value!: string;

    onToggle(selectedTag: string) {
      this.$emit('update:value', selectedTag);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    > li {
      text-align: center;
      margin: 6px;
      line-height: 32px;
      font-weight: bold;

      > .tag {
        border-radius: 10px;
        box-shadow: 2px 2px 1px rgba(51, 51, 51, 0.5);
      }

      > .tag.selected {
        box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.5);
        transform: translate(1px, 1px);
      }
    }
  }
</style>