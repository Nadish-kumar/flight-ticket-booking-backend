const mongoose  = require("mongoose")

const userSchema = mongoose.Schema({
    name : {
      type: String
    },
    phone : {
    type : Number
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    
   
})

const useref = mongoose.model("user" , userSchema)

module.exports = useref