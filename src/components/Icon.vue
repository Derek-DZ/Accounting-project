<template>
  <svg class="icon">
    <use :xlink:href="'#' + name"/>
  </svg>
</template>

<script lang="ts">
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  // 封装 importAll 方法 遍历目录引入所有 svg
  try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
  // 使用 importAll 引入 ../assets/icons 目录下所有 svg

  export default {
    props: ['name'],
    name: 'Icon'
  };
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>