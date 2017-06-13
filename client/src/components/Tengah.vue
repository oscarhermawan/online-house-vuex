<template>
  <div>
    <div class="columns is-multiline is-mobile" v-for="house in houses">  <!-- DISINI MELAKUKAN PERULANGAN -->
      <div class="column">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img :src="house.photo" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{house.title}}</strong><br>
                  <small>Rp. {{house.price}}</small>
                  <br>
                  {{house.description}}
                  <br><br>
                  <a class="button is-primary" @click="editHouse(house)">Edit</a>
                  <a class="button is-danger" @click="deleteHouse(house)">Delete</a>
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item">
                    <span class="icon is-small"><i class="fa fa-reply"></i></span>
                  </a>
                  <a class="level-item">
                    <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                  </a>
                  <a class="level-item">
                    <span class="icon is-small"><i class="fa fa-heart"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
export default{
  methods:{
    deleteHouse:function(house){
      this.$store.dispatch('DELETE_HOUSE', { deleteHouse : house })
      .then(response=>{
        // this.$router.push('/')
      })
    },
    editHouse(house){
      this.$router.push({
        name:'updateHouse',
        params: { id: house._id}
      })
    }
  },
  computed: mapState([
    'houses'
  ])
}
</script>

<style scoped>
<style>
