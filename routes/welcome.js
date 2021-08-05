const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
router.get('/', (req, res) => {
    console.log("welcome")
    res.status(200).json('Welcome')
})

module.exports = router;