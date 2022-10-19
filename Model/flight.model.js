const mongoose  = require("mongoose")

const flightSchema = mongoose.Schema({

    name : {
      type: String
    },
    company : {
    type : String
    },
    from : {
        type : String
    },
    to : {
        type : String
    },
    date : {
        type : String
    },
    fromtime : {
        type : String
    },
    totime : {
        type : String
    },
    price : {
        type : Number
    }
    
   
})

const flightref = mongoose.model("flight" , flightSchema)

module.exports = flightref