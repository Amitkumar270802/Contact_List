// import lib 
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/login");
const cors = require("cors");

const database = require("./config/database");
// Create an instance of express 
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3051;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// router
app.use("/api/contact", userRoute);


database.database_connection()
// connect to MongoDB
// mongoose .connect(process.env.MONGO_URL, {  useNewUrlParser: true,  useUnifiedTopology: true, }) 
//     .then(() => { 
//         console.log("Connected to mongoDB Atlas"); 
//     }) 
//     .catch((error) => { 
//         console.log("Something Went Wrong", error); 
//     });


// start the  server
app.listen(PORT, () => {
  console.log("Listening on port :", PORT);
});

/*
install :
            npm install dotenv
            npm install express
            npm install mongoose
            npm install nodemon

Run on Terminal : npm run dev


Add To script :
            "start":"node index.js"
            
Run on Terminal :  server : node index.js
                   client : npm start

*/
