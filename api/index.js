const fs = require("fs");
const https = require("https");
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./router.js');
const express = require('express');

const api = express();

dotenv.config({path: "./.env"});
api.use(express.json());
api.use(cors())
api.use("/v1", router);

api.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}!`));