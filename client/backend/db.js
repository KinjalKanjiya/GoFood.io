const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://GoFood:GoFood_1234@cluster0.kojmg9f.mongodb.net/?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDB;
