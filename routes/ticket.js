var express = require('express');
var router = express.Router();
var ticket = require("../controller/ticket.controller")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post("/post",ticket.createticket)

module.exports = router;
