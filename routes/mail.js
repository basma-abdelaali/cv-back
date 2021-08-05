const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
router.post('/', (req, res) => {

    const {
        emailHost,
        email,
        
        message,
        name
    } = req.body
    console.log(req.body)

    var transporter = nodemailer.createTransport({
        host: 'mail.zenhosting.tn',
        secure:false,
        auth: {
            user: 'bassmaatia@gmail.com',
            pass: '@25603243Basma'
        }
    });

    var mailOptions = {
        from: email,
        to: emailHost,
        subject: "email from " + email + "name" + name ,
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.status(200).json('message envoyé')

});

module.exports = router;