 const express = require('express')
 const mounts = require('./moutain.json')
 const cors = require('cors')
 const app = express();
 const port = 5000;

 app.get('/',(res,req) => {
    req.send('This is my main server ki khobor batija')
 });

 app.use(cors())

 app.get('/mounts',(res,req) => {
    req.send(mounts)
 });

 


app.get('/mounts/:id', (req, res) => { // Corrected parameter order
    const id = parseInt(req.params.id);
    const mount = mounts.find(mount => mount.id === id) || {};
    res.send(mount);
});

 


 app.listen(port, () => {
    console.log(`my server is running on ${port}`);
 })