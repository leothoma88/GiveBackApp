const express = require("express");
const urlConfigs = require("../config/everyOrgsConfig.json");
const router = express.Router();

router.get("/", function (req, res) {
   console.log("test: ")
    res.json({
        hello: "hello"
    }) 
});

module.exports = router;