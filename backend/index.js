const mongoose = require('mongoose');
const connect = require('./db'); // Import the database connection
const express = require('express');
const user = require('./Models/User');


connect(); // Connect to MongoDB

const app = express();
const port = 5000;

//Middelware usese for send things in Request Body.
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.use('/', require('./routes/main'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

