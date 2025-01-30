//Step 1 creating a connection to the MongoDB database so that we can interact with it using Mongoose.
//this use for saving data in database of mongodb.

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://surajmauryahomework:yWX3GdgeiQLICDGO@inotebook.vuy8p.mongodb.net/';

const connect = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true, // Optional: Ensure compatibility with modern MongoDB servers
            useUnifiedTopology: true, // Optional: Enables the new connection management engine
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the application if the connection fails
    }
};

module.exports = connect;
