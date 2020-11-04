<template>
  <div class="accounts">
    <section class="label">
      <figure>
        <Icon :name="account.name"/>
      </figure>
      <div class="test-wrapper">
        <span class="labelNote">内容{{ account.note }}</span>
        <span class="labelTime">123{{ account.time }}</span>
      </div>
      <p class="labelMoney">{{ account.type }}￥{{ account.number }}</p>
    </section>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  type Account = {
    name: string;
    note: string;
    time: string;
    type: string;
    number: string;
  }
  @Component
  export default class Accounts extends Vue {
    account: Account = {
      name: 'clothes',
      note: '',
      time: '',
      type: '-',
      number: '0',
    };
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .accounts {
    background-color: $color-box;
    border-radius: 30px;
    margin-top: 10px;

    > .label {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 5px;
      justify-content: start;
      margin: 10px 8px 10px 8px;

      > figure {
        margin: 5px;
        display: flex;
        justify-content: center;
        width: 32px;
        height: 32px;
        background-color: $color-food;
        border-radius: 10px;

        > .icon {
          width: 20px;
          height: 20px;
          align-self: center;
          color: #fff;
        }
      }

      > .test-wrapper {
        display: flex;
        flex-direction: column;
        margin-left: 5px;

        > span {
          font-size: 12px;
          margin-left: 0;
        }

        > .labelTime {
          margin-top: 4px;
          color: $color-lowLight;
        }
      }

      > .labelMoney {
        align-self: center;
        flex-grow: 1;
        text-align: right;
      }
    }
  }
</style>