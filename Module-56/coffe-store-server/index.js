const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

//middleware use here
app.use(cors());
app.use(express.json())


app.get('/' , (req, res) => {
    res.send('Coffe making server is running')
})

app.listen(port, () => {
    console.log(`Coffe server is running on port : ${port}`)
})