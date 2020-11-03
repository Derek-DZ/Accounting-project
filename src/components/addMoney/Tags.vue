<template>
  <ul class="tags">
    <li>
      <Tag class="selected" tag-name="clothes"/>
      衣
    </li>
    <li>
      <Tag tag-name="food"/>
      食
    </li>
    <li>
      <Tag tag-name="room"/>
      住
    </li>
    <li>
      <Tag tag-name="travel"/>
      行
    </li>
    <li>
      <Tag tag-name="medical"/>
      医疗
    </li>
    <li>
      <Tag tag-name="other"/>
      其他
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tag from '@/components/Tag.vue';
  @Component({
    components: {Tag}
  })
  export default class Tags extends Vue {


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
      margin: 8px;
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