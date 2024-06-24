const express = require('express');
const app = express();

app.get('/', (req,res) => {
        res.send('hello root node');
});

//include route files
const usersRoute = require('./routes/users');
const prodRoute = require('./routes/products');

//user routes
app.use('/users', usersRoute);
app.use('/products', prodRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
        console.log(`Server is running on ${port}`);
});
