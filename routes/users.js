const express = require('express');
const router = express.Router();

//@route    GET api/users
//@desc     get all users contacts
//@access   Private
router.get('/', (req, res) => {
    res.send('Register a user')
}); 

//@route    GET api/users
//@desc     get all users contacts
//@access   Private
router.get('/', (req, res) => {
    res.send('Register a user')
});


module.exports = router;