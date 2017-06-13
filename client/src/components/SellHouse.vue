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
              <input class="input" type="text" placeholder="Text input">
            </p>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input">
            </p>
          </div>
          <div class="field">
            <label class="label">Photo</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input">
            </p>
          </div>
          <div class="field">
            <label class="label">Price</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input">
            </p>
          </div>
          <div class="field">
            <label class="label">Address</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input">
            </p>
          </div>
          <div class="field">
            <label class="label">Location</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input">
            </p>
          </div>

          <a class="button is-success">Sell</a>
          <a class="button is-info">Cancel :(</a>
        </div>
      </div>
  </div>
</template>

<script>
import NavbarTop from './NavbarTop'

export default{
  components:{
    navbartop:NavbarTop
  }
}
</script>

<style scoped>
#container{
  width:80%;
  margin:0 auto;
}
</style>
