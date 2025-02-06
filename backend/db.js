const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://surajmauryahomework:yWX3GdgeiQLICDGO@inotebook.vuy8p.mongodb.net/';

const connect = async () => {
    try {
        await mongoose.connect(mongoURI, {
            
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the application if the connection fails
    }
};

module.exports = connect;
