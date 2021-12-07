const express = require('express');
const router = express.Router();
const bcrypt=require('bcryptjs');
const jwt= require('jsonwebtoken');
const config=require('config');
const { check, validationResult } = require('express-validator');


const User = require('../models/User');

//@route    GET api/users
//@desc     get all users contacts
//@access   Private
router.post('/',
    check('name').not().isEmpty()
        .withMessage('Please add name'),
    check('email').isEmail()
        .withMessage('Please include a valid email'),
    check('password').isLength({ min: 6 })
        .withMessage('Please enter a password with 6 or more characters'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { name, email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            user = new User({
                name,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload={
                user:{
                    id:user.id
                }
            }
            jwt.sign(payload,config.get('jwtSecret'),{
                expiresIn:360000
            },(err,token)=>{
                if(err) throw err;
                res.json({token})
            })
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });

module.exports = router;