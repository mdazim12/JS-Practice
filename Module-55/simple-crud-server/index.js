const express = require('express');
const cors = require('cors');
const fs = require('fs'); // For reading the test.json file
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// AjkEmk0oPgAUL3GU



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mrjoan84:AjkEmk0oPgAUL3GU@cluster0.gciks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

const client = new MongoClient(uri, {
  tls: true,
  serverSelectionTimeoutMS: 3000,
  autoSelectFamily: false,
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db('usersDB');
    const userCollection = database.collection('users')



    app.get('/users' , async(req,res) => {
      const cursor = userCollection.find()
      const result = await cursor.toArray();
      res.send(result)
    })

    app.post('/users', async(req,res) => {
      const user = req.body;

      console.log('new user is ', user)

      const result = await userCollection.insertOne(user)
      res.send(result);

    })







    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close()
  }
}
run().catch(console.dir);









app.get('/', (req, res) => {
    res.send('Simple CRUD server is running boss');
});

app.listen(port, () => {
    console.log(`Simple CRUD server is running on port: ${port}`);
});
