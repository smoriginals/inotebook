//Step 2 after connect to the database we need to create endpoints and hit that so we can do that here.

const mongoose = require('mongoose');
const connect = require('./db'); // Import the database connection
const express = require('express');
const user = require('./Models/User');  // Step 4 Import the User model for what we want to add in data of a user such as name, email, password.


connect(); // Connect to MongoDB

const app = express();
const port = 5000;

//Middelware usese for send things in Request Body.
app.use(express.json());


//Step 3 creating endpoints for the application.
//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.use('/', require('./routes/main'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

