const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
        res.send('this is the products route');
});

router.get('/prod1', (req,res) => {
        res.send('product 1 is here');
});

router.get('/prod2', (req,res) => {
        res.send('product 2 is here');
});

module.exports = router;
