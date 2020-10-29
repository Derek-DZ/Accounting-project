<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Layout'
  };
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    /*border: 3px solid red;*/
    display: flex;
    flex-direction: column;
  }
  .content {
    overflow: auto;
  }
</style>