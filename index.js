const express = require('express');
const cors = require('cors');

const app = express();
const User = require('./config');

app.use(express.json());
app.use(cors());


app.get('/create', async (req, res) => { 
    const data = req.body;
   // await User.add(data);
    res.send(req.body)
})
 
app.listen(4000, () => {
    console.log('Up and running on port 4000')
})