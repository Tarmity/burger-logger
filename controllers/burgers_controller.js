const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all routes and set up the logic within those routes where required.
router.get("/", (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});