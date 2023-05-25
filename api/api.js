const express = require('express');
const cors = require('cors');

const heroRouter = require('./routers/superhero');

const api = express();

api.use(cors());
api.use(express.json());

api.get("/", (req, res) => {
    res.json({
        title: "Heroes Unite",
        description: "Find and rate the best Hero ever!"
    })
})

api.use("/", heroRouter);

module.exports = api;
