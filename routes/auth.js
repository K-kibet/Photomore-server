const firebase = require('firebase/auth');
const router = require('express').Router(0)


//singup
router.post("/signup",(req, res) => {
    if(!req.body.email || !req.body.password) {
        return res.status(422).json({
            email: "email is required",
            password: "password is required"
        });
    }

    firebase.createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then(data => {
        return res.status(201).json(data);
    }).catch(error => {
        return res.status(500).json(error);
    })
})

//singin
router.post("/signin",(req, res) => {
    if(!req.body.email || !req.body.password) {
        return res.status(422).json({
            email: "email is required",
            password: "password is required"
        });
    }

    firebase.signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(data => {
        return res.status(201).json(data);
    }).catch(error => {
        return res.status(500).json(error);
    })
})

module.exports = router;