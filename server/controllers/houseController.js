var ObjectId = require('mongodb').ObjectId
var db = require('../models/house')
const methods = {}

//GET ALL House
methods.getAll = function(req, res) {
  db.find(function(err, record) {
    if(err){
      console.log(err);
    } else {
      res.send(record)
    }
  })
}//GET ALL House

//GET ONE BY ID
methods.getById = function(req,res){
  db.findById(req.params.id, function(error, record){
    if(error){
      res.send(error)
    } else {
      res.send(record)
    }
  })
}//GET ONE BY ID

//INSERT HOUSE
methods.insertHouse = function(req, res){
  console.log(req.body);
  db.create(req.body, function(err, record){
    if(err){
      res.send(err)
    } else {
      res.send(record)
    }
  })
}//INSERT HOUSE

//UPDATE HOUSE
methods.updateHouse = function(req,res) {
  db.findByIdAndUpdate(req.params.id, {$set : req.body }, {new:true})
  .exec((error, record)=>{
    if(error){
      res.send(error)
    } else {
      res.send(record)
    }
  })
}//UPDATE HOUSE

//DELETE HOUSE
methods.deleteHouse = function(req,res) {
  db.findByIdAndRemove(req.params.id, function(err, record){
    if(!err){
      res.send(record)
    } else {
      res.send(err)
    }
  })
}//DELETE HOUSE

module.exports = methods
