const mongoose = require('mongoose');
const user = require('./Models/User');
const express = require('express');
const connect = require('./db');
require("dotenv").config();

connect();

const app = express();
const port = 5000;

//Middleware (use to send data into request body).
app.use(express.json());

app.use('/', require('./routes/main'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/login', require('./routes/login'));
app.use('/api/notes', require('./routes/notes'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
