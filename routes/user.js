const router = require('express').Router();
const firebase = require('firebase/auth');

router.get('/:id', (req, res ) => {

})

router.post('/forget-password', (req, res) => {
    if(!req.body.email) {
        return res.status(422).json("Email is required!");
    }
    firebase.sendPasswordResetEmail(req.body.email)
    .then( () => {
        return res.status(200).json({status: "Email Verification Sent!"});
    }).catch(error => {
        return res.status(500).json(error);
    })
});