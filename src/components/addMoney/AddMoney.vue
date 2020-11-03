<template>
  <div class="addMoney">
    <div class="numberPad">
      <div class="output">0
        <Icon :name="iconName"/>
      </div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清除</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>ok</button>
        <button>0</button>
        <button>.</button>
      </div>
    </div>
    <ul class="out-in">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
    <div class="node">
      <span>备注</span>
      <label>
        <input type="text" placeholder="在这里添加备注">
      </label>
    </div>
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
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import Tag from '@/components/Tag.vue';

  @Component({
    components: {Tag}
  })
  export default class AddMoney extends Vue {
    iconName = 'food';
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .addMoney {
    border: 2px solid blue;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    border-radius: 30px;
    background-color: white;
    margin: 10px;

    > .tags {
      display: flex;
      flex-direction: row;
      margin: 5px;

      > li {
        text-align: center;
        margin: 8px;
        line-height: 32px;
        font-weight: bold;
        > .tag {
          border-radius: 10px;
          box-shadow: 2px 2px 1px rgba(51,51,51,0.5);
        }
        > .tag.selected {
          box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.5);
          transform: translate(1px,1px);
        }
      }
    }

    > .node {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      width: 100%;
      font-size: 16px;
      background-color: $color-background;

      > span {
        padding: 16px;
      }

      > label {
        flex-grow: 1;

        > input {
          align-self: center;
          width: 100%;
          border: none;
          background-color: $color-background;
          padding: 16px;
        }
      }
    }
  }
</style>