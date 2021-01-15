const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { dbUrl, url, url2, url3, port } = require('./data.js')
const api = require('./routes/api')
const api2 = require('./routes/api2')
const userApi = require('./routes/userApi')
const api3 = require('./routes/api3')

mongoose.connect(process.env.MONGODB_URI || dbUrl, { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false, useCreateIndex: true })
  .then(() => console.log('Connected to mongo'))
  .catch(err => console.log(err));

const server = express();
server.use(express.json());
server.use(cors());

server.use(url, api);
server.use(url2, api2);
server.use(url3, userApi);
server.use(url4, api3);


server.listen(process.env.PORT || port, () => console.log('listening'));
