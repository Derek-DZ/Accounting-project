<template>
  <div class="tagsWrapper">
    <div class="iconWrapper" @click="scrollLeft">
      <Icon name="left"/>
    </div>
    <ul class="tags">
      <li v-for="tags in tagsTable" :key="tags.key" @click="onToggle(tags.key)">
        <Tag :tag-name="tags.key" :class="{selected: value===tags.key}"/>
        {{tags.value}}
      </li>
    </ul>
    <div class="iconWrapper" @click="scrollRight">
      <Icon name="right"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import Tag from '@/components/Tag.vue';
  import tagsList from '@/constant/tagsList';

  @Component({
    components: {Tag}
  })
  export default class Tags extends Vue {
    tagsTable = tagsList;

    @Prop() readonly value!: string;

    onToggle(selectedTag: string) {
      this.$emit('update:value', selectedTag);
    }

    scrollRight() {
      const tags = document.querySelector('.tags');
      tags?.scroll(99999,0)
    }
    scrollLeft() {
      const tags = document.querySelector('.tags');
      tags?.scroll(0,0)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tagsWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 100%;

    > .iconWrapper {
      > .icon {
        align-self: center;
        height: 15px;
        opacity: 60%;
        animation: .5s linear .1s infinite alternate close;
      }

      @keyframes close {
        from {
          transform: translateX(-2px)
        }
        to {
          transform: translateX(2px)
        }
      }
    }

    > .tags {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin: 10px 3px 0 3px;
      overflow-x: scroll;
      max-width: 89%;

      > li {
        text-align: center;
        margin: 5px;
        line-height: 32px;
        font-weight: bold;

        > .tag {
          border-radius: 10px;
          box-shadow: 2px 2px 1px rgba(51, 51, 51, 0.5);
        }

        > .selected {
          box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.8);
          transform: translate(1px, 1px);
        }
      }
    }
  }

</style>