  

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import usersRouter from "./routes/users.js";
import dialogRouter from "./routes/dialog.js";

const app = express();
const connection = mongoose.connection;

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use("/users", usersRouter);
app.use("/dialogs", dialogRouter);

const ATLAS_URI = 'mongodb+srv://wmwassmann:thunderThunderTHUNDERCATSh0000@rpgaa.59ktj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
})

mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);



// import express from 'express'
// import cors from 'cors';
// import mongoose from 'mongoose'

// // const express = require('express');
// // const cors = require('cors');


// // import ('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// // import characterRouter from './routes/characters.js'
// import usersRouter from './routes/users.js'


// // middleware
// app.use(cors());
// app.use(express.json());



// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
// );

// const connection = mongoose.connection;

// connection.once('open', () => {
//     console.log('MongoDB database connection established successfully!');
// })

// // routes - add any new routes here



// // app.use routes - add any new routes here

// // app.use('/characters', characterRouter);
// app.use('/users', usersRouter);

// // app set cookies

// app.listen(port, ()=> {
//     console.log(`Server is running on port: ${port}`)
// })