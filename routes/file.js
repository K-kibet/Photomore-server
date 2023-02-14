const router= require('express').Router();
const storage = require('firebase/storage');


router.post('/', (req, res) => {
    if(!req.body.file || !req.body.name) {
        return res.status(422).json("File is required!");
    }

    storage.uploadBytes(storage.ref('Files' + req.body.name), file).then(data => {
        return res.status(200).json(data)
    }).catch(error => {
        res.status(500).json(error);
    })
});