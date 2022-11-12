const mongoose = require("mongoose");
const db = process.env.LOCAL_DATABASE_URI;
console.log("LOCAL_DATABASE_URI::˝", db);
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;