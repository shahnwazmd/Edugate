import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect("mongodb+srv://msshahnwaz:Shah%40123@cluster0.kpklz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to mongoDB");
} catch (error) {
    console.error("Error: ", error);
}


// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});