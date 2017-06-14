<template>
  <div id="container">
    <navbartop></navbartop>
    </br>
      <div class="columns">
        <div class="column is-half">
          <gmap-map
          :center="location"
          :zoom="12"
          @click="clickMap()"
          style="width: 100%; height: 100%"
        >
          <gmap-marker
            :position="location"
            :clickable="true"
            :draggable="true"
            @g-click="marker"
          ></gmap-marker>
        </gmap-map>

        {{ location }}
        </div>

        <div class="column">
          SELL YOUR HOUSE FOR BETTER FUTURE
          <br><br>
          <div class="field">
            <label class="label">Title</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input" v-model="newHouse.title">
            </p>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input" v-model="newHouse.description">
            </p>
          </div>
          <div class="field">
            <label class="label">Photo</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input" v-model="newHouse.photo">
            </p>
          </div>
          <div class="field">
            <label class="label">Price</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input" v-model="newHouse.price">
            </p>
          </div>
          <div class="field">
            <label class="label">Address</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input" v-model="newHouse.address">
            </p>
          </div>
          <div class="field">
            <label class="label">Location</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input" v-model="newHouse.location">
            </p>
          </div>

          <a class="button is-success" @click="addHouse">Sell</a>
          <a class="button is-info">Cancel :(</a>
        </div>


      </div>
  </div>
</template>

<script>


import {mapState} from 'vuex'
import * as VueGoogleMaps from 'vue2-google-maps';
import NavbarTop from './NavbarTop'
import Vue from 'vue'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyALtlGkqr4ldte61-e8jgowNbT92Ol6ZI4',
    v: 'OPTIONAL VERSION NUMBER',
  }
});

export default{
  data(){
    return{
      location:{
        lat:'',
        lng:''
      },
      newHouse:{
        title:'',
        description:'',
        photo:'',
        price:'',
        address:'',
        location:''
      }
    }
  },
  components:{
    navbartop:NavbarTop
  },
  methods:{
    addHouse(){
      this.$store.dispatch('ADD_HOUSE', { newHouse:this.newHouse })
      .then(response=>{
        this.$router.push('/')
      })
    },
    clickMap(){
      this.location.lat = -7.0
      this.location.lng = 107
    }
  },
  computed: {
    marker() {
      console.log('hasil', typeof this.$store.getters.getLocation.lat);
      console.log('hasil', typeof this.$store.getters.getLocation.lng);
      this.location.lat = this.$store.getters.getLocation.lat;
      this.location.lng = this.$store.getters.getLocation.lng;
      // return this.$store.getters.getLocation

    }
  }
}
</script>

<style scoped>
#container{
  width:80%;
  margin:0 auto;
}
</style>
