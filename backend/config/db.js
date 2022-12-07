const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb+srv://abelparayil:718xqNMSIf2qp6GF@cluster0.lzsrvu4.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;