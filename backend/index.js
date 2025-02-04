const mongoose = require('mongoose');
const user = require('./Models/User');
const express = require('express');
const connect = require('./db');

connect();

const app = express();
const port = 5000;

//Middleware (User for send req to JSON body).
app.use(express.json());


//app.use('/api/auth', require('./routes/auth'));
//app.use('/api/notes', require('./routes/notes'));
//app.use('/api/login', require('./Routes/login'));
app.use('/', require('./routes/main'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

