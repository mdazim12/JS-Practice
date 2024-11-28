const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors());
app.use(express.json());


const users = [
    {id:1,name:'Sabana',email:'sabana@gmail.com'},
    {id:2,name:'Sabnnor',email:'sabnoor@gmail.com'},
    {id:3,name:'Mousumi',email:'mousumi@gmail.com'}
]

app.get('/', (req,res) => {
    res.send('user management server is runing Sir')
})

app.get('/users', (req,res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log(req.body)
    console.log('post api hiting')
    const newUser = req.body;
    newUser.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    users.push(newUser);
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`The server is runing on PORT: ${port}`)
})