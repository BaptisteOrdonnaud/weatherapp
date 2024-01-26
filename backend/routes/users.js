var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');

router.post('/signup', (req, res) => {

    const { name, email, password } = req.body;
    // Check if the city has not already been added 

    if (!checkBody(req.body, ["email", "password"])) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    }

    User.findOne({ email: { $regex: new RegExp(req.body.email, 'i') } })
        .then(response => {
            if (response) {
                res.json({ result: false, error: 'User already exists' })
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,

                });

                newUser.save().then(newUserData => {
                    res.json({ result: true, userInfo: newUserData });
                });

            }
        })

});


router.post('/signin', (req, res) => {

    const { name, email, password } = req.body;
    // Check if the city has not already been added 

    if (!checkBody(req.body, ["email", "password"])) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    }



    User.findOne({ email: { $regex: new RegExp(req.body.email, 'i') }, password: req.body.password })
        .then(response => {
            if (response) {
                res.json({ result: true })
            } else {


                res.json({ result: false, error: 'User not found' });


            }
        })

});


module.exports = router