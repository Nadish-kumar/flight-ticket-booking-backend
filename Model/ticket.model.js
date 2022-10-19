const mongoose  = require("mongoose")

const ticketSchema = mongoose.Schema({
    userid : {
      type: String
    },
    count : {
    type : Number
    },
    email : {
        type : String
    },
    amount : {
        type : Number
    },
    ticket : {
        type : Array
    }
    
   
})

const ticketref = mongoose.model("ticket" , ticketSchema)

module.exports = ticketref