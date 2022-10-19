var express = require('express');
var router = express.Router();
var flight = require("../controller/flight.controller")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/get",flight.getflight)
router.post("/post",flight.createflight)
router.post("/spe",flight.specialflight)

module.exports = router;
