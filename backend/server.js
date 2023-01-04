const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/user', userRoutes)

app.listen(app.get('port'), () => {
  console.log(`Example app running ${process.env.PORT}`)
})