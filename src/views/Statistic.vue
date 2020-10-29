<template>
  <div class="wrapper">
    <Header/>
    <Money/>
    <layout/>
  </div>
</template>

<script lang="ts">
  import Header from '@/components/Header.vue';
  import Money from '@/components/Money.vue';
  export default {
    name: 'Statistic',
    components: {Money, Header},
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin:8px;
  }
</style>