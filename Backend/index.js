import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./routes/book_route.js"
import userRoute from "./routes/userRoute.js"

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//dotenv config file
dotenv.config()
 
const PORT =process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connection of mongoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected To MongoDB")
} catch (error) {
    console.log("Error : ",error);
}


//routes defining
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})