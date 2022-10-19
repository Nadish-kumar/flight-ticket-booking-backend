var ticketcontroller = require("../Model/ticket.model")
var mongoose = require("mongoose")
var nodemailer = require("nodemailer")

const createticket = (req,res) => {
    var dbcard = req.body
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "yatkumar246@gmail.com",
          pass: "8489537070",
        },
      });
  let mailoption = {
    from: "yatkumar246@gmail.com",
    to: req.body.email,
    subject: "your ticket is booked successfully",
    text: `Hello your ticket number are ${req.body.ticket} . Your Smile is very cute its very important to as! so please take your travel with more smile and happiness`,
  };

  transporter.sendMail(mailoption, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("email send !!!!!");
    }
  });
    ticketcontroller.insertMany(dbcard, (err,data) => {
        if(err){
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
}

module.exports ={
    createticket,

}