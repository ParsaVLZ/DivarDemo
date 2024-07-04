const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to MongoDB.");
}).catch(err => {
    console.log(err?.message ?? "MongoDB connection Failed!");
})