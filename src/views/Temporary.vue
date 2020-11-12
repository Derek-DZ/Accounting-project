<template>
  <div></div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Temporary extends Vue {
    created(){
      this.$router.push('/')
    }
  }
</script>

<style lang="scss" scoped>

</style>