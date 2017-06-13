<template>
  <div id="container">
    <navbartop></navbartop>
    </br>
      <div class="columns">
        <div class="column is-one-quarter">
          <p class="notification is-info">
            <code class="html">is-one-quarter</code>
          </p>
        </div>

        <div class="column">
          SELL YOUR HOUSE FOR BETTER FUTURE
          <br><br>

          <div class="field">
            <label class="label">Title</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input" v-model="updateHouse.title">
            </p>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input" v-model="updateHouse.description">
            </p>
          </div>
          <div class="field">
            <label class="label">Photo</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input" v-model="updateHouse.photo">
            </p>
          </div>
          <div class="field">
            <label class="label">Price</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input" v-model="updateHouse.price">
            </p>
          </div>
          <div class="field">
            <label class="label">Address</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input" v-model="updateHouse.address">
            </p>
          </div>
          <div class="field">
            <label class="label">Location</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input" v-model="updateHouse.location">
            </p>
          </div>

          <a class="button is-success" @click="updateHouseFungsi">Update</a>
          <a class="button is-info">Cancel Update</a>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import NavbarTop from './NavbarTop'

export default{
  data(){
    return{
      updateHouse:{
        params:this.$router.currentRoute.params.id,
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
    updateHouseFungsi(){
      console.log('ini',this.updateHouse);
      this.$store.dispatch('UPDATE_HOUSE', { updateHouse : this.updateHouse})
      .then(response=>{
        this.$router.push('/')
      })
    }
  },
  created(){
    let self = this
    let idnya = this.$router.currentRoute.params.id
    axios.get(`http://localhost:3000/houses/${idnya}`)
    .then((house)=>{
      self.updateHouse.title=house.data.title,
      self.updateHouse.description=house.data.description,
      self.updateHouse.photo=house.data.photo,
      self.updateHouse.price=house.data.price,
      self.updateHouse.address=house.data.address,
      self.updateHouse.location=house.data.location
  })
}
}
</script>

<style scoped>
#container{
  width:80%;
  margin:0 auto;
}
</style>
