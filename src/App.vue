<template>
  <div>
    <router-view/>
  </div>
</template>


<script lang="ts">

</script>

<style lang="scss">
  @import "~@/assets/style/helper.scss";
  @import "~@/assets/style/reset.scss";
  body{
    --webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    line-height: 1.5;
    background-color: $color-background;
  }
</style>
