<template>
  <div id="app">
    <mheader></mheader>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import Mheader from 'components/m-header/m-header.vue'
  import Tab from 'components/tab/tab.vue'

  export default {
    components: {
      Mheader,
      Tab
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  #app
    color: $color-theme
</style>
