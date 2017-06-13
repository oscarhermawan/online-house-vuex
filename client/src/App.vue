<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function(){
    this.$store.dispatch('LOAD_HOUSE_LIST')
  }
}
</script>

<style>
#app {

}
</style>
