<template>
  <div class="wrapper">
    <Header/>
    <Money/>
    <layout/>
    <Account/>
    <footer></footer>
  </div>
</template>

<script lang="ts">
  import Account from '@/components/accounts/Account.vue';
  import Header from '@/components/Header.vue';
  import Money from '@/components/Money.vue';
  export default {
    name: 'Accounts',
    components: {Money, Header, Account},
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