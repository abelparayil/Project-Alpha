const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(app.get('port'), () => {
  console.log(`Example app running ${process.env.PORT}`)
})