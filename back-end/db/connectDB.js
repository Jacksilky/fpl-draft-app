const mongoose = require('mongoose');

require('dotenv').config()

const connectDB = async () => {
	console.log(process.env)
	try {
    await mongoose.connect(`mongodb+srv://rw-pass:${process.env.ATLAS_DB_PASS}@trader.qwc5g.mongodb.net/trader?retryWrites=true&w=majority`);
    console.log('MongoDB Connected...');
	} catch (err) {
		console.error("Error connecting to DB - ", err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;

