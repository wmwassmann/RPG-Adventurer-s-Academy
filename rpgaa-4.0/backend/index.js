  

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import usersRouter from "./routes/users.js";
import dialogRouter from "./routes/dialog.js";
import narrationRouter from "./routes/narration.js";

import dotenv from 'dotenv'
import connectDB from './config/db.js';



const app = express();
const connection = mongoose.connection; 

const result = dotenv.config()

if (result.error) {
  throw result.error
}


console.log(process.env.ATLAS_URI)

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use("/users", usersRouter);
app.use("/dialogs", dialogRouter);
app.use("/narration", narrationRouter);


// const ATLAS_URI = 'mongodb+srv://wmwassmann:thunderThunderTHUNDERCATSh0000@rpgaa.59ktj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// const PORT = process.env.PORT || 5000

const ATLAS_URI = process.env.ATLAS_URI || 'mongodb+srv://wmwassmann:thunderThunderTHUNDERCATSh0000@rpgaa.59ktj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8080


connectDB()

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
})

mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'))
}