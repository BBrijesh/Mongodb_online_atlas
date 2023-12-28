var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller')

/* GET home page. */
router.post('/insert', user.insert); 
router.get("/",user.select_data);
router.get("/delete/:id", user.delete_data);
router.post("/update/:id", user.update_data);


module.exports = router;
