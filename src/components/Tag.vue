<template>
  <div class="tag">
    <figure :class="tagName">
      <Icon :name="tagName"/>
    </figure>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop(String) tagName!: string;
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .clothes {
    background-color: $color-clothes;
  }

  .food {
    background-color: $color-food;
  }

  .room {
    background-color: $color-room;
  }

  .travel {
    background-color: $color-travel;
  }
  .study {
    background-color: $color-study;
  }
  .amusement {
    background-color: $color-amusement;
  }

  .medical {
    background-color: $color-medical;
  }

  .work {
    background-color: $color-work;
  }

  .other {
    background-color: $color-other;
  }


  figure {
    display: flex;
    justify-content: center;
    margin: 0;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    z-index: -1;
    opacity: 85%;

    > .icon {
      width: 25px;
      height: 25px;
      align-self: center;
      color: #fff;
    }
  }

</style>