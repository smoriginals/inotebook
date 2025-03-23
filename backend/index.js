const express = require('express');
const connect = require('./db');
const cors = require('cors');
require("dotenv").config();

connect();      // Connect to the database

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());        // Middleware to parse JSON
app.use(cors());

app.use('/api/auth', require('./routes/auth'));
// Start the server
app.listen(port, () => {
    console.log(`${port} PORT Online`);
});
