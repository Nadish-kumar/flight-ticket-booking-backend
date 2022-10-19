var express = require('express');
var router = express.Router();
var users = require("../controller/user.controller")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post("/login",users.login)
router.post("/sign",users.signup)
router.post("/pass",users.passwordchange)

module.exports = router;
  