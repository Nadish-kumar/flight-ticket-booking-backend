var flightcontroller = require("../Model/flight.model")
var mongoose = require("mongoose")

const createflight = (req,res) => {
    var dbcard = req.body
    flightcontroller.insertMany(dbcard, (err,data) => {
        if(err){
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
}

const getflight = (req,res) => {
    flightcontroller.find((err,data) => {
        if(err) {
            res.status(500).send(res)
        }else{
            res.status(200).send(data)
        }
       })
}

const specialflight = (req,res) => {
   var dbcard = req.body
    flightcontroller.find(dbcard, (err,data) => {
        if(err) {
            res.status(500).send(res)
        }else{
            res.status(200).send(data)
        }
       })
}




module.exports ={
    createflight,
    getflight,
    specialflight
}