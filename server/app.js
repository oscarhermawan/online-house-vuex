
const express = require('express');
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

mongoose.connect('mongodb://localhost/online-house-selling-vuex', (err)=>{
  if(err){
    console.log(err);
  } else {
    console.log('Connection Success');
  }
})

const houses = require('./routes/houses')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.use('/houses', houses)

app.listen(3000)
module.exports = app
