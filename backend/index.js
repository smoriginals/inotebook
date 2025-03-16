const mongoose = require('mongoose');
const express = require('express');
const connect = require('./db');
const cors = require('cors');
require("dotenv").config();

// Connect to the database
connect();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());
// Routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/auth', require('./routes/auth'));
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
