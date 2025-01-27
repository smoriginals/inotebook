//const connect = require('./db');
//const express = require('express');

//connect();
//const app = express();
//const port = 3001;
//app.get('/api', (req, res) => {
//    res.send('Hello World');
//});
//app.listen(port, () => {
//    console.log(`Server is running on port ${port}`);
//});

const connect = require('./db'); // Import the database connection
const express = require('express');

connect(); // Connect to MongoDB

const app = express();
const port = 3001;

// Define an API route
//app.get('/api', (req, res) => {
//    res.send('Hello World');
//});


//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

