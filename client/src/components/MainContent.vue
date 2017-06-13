<template>
  <div id="container">
    <navbartop></navbartop>
    </br>
      <div class="columns">
        <div class="column is-one-quarter">
          <sidebarleft></sidebarleft>
        </div>

        <div class="column">
          <tengah></tengah>
        </div>
      </div>
  </div>
</template>

<script>
import NavbarTop from './NavbarTop'
import SidebarLeft from './SidebarLeft'
import tengah from './Tengah'

export default{
  components:{
    navbartop:NavbarTop,
    sidebarleft:SidebarLeft,
    tengah:tengah
  }
}
</script>

<style scoped>
#container{
  width:80%;
  margin:0 auto;
}
</style>
