//responding to a GET request
//import dependencies and other modules
const express = require('express');
const router = express.Router();

//define route
router.get('/', (req, res) => {
        //this executes when going to http://localhost:3000/user
        res.send('this is the user route');
});

router.get('/101', (req,res) => {
        //executes when /user/101
        res.send('this is the user 101 route');
});

router.get('/dob', (req,res) => {
        res.send('user date of birth is stored here');
});

//export router so server.js can use
module.exports = router;
