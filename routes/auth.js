const router = require("express").Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const { registerValidation }= require ('../validation');






router.post('/register', async (req,res) => {

    //Data validation before sending user
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    //Check if email unique
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send('Email has been taken');

    //Hask the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //Creating a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch{
        res.status(400).send(err);
    }
});

module.exports = router;