const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { response } = require('express');

const { MONGO_USER, MONGO_PASSWORD, MONGO_DBNAME } = require('./config');



const app = express();
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://mongo-admin:${MONGO_PASSWORD}@cluster0.983qt.mongodb.net/${MONGO_DBNAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("mydb").collection("mycollection");
  // perform actions on the collection object
  client.close();
});



async function mongoDB_insert(data) {
  try {
      // Connect to DB
      await client.connect();
      console.log("Connected correctly to server");

      const db = client.db(MONGO_DBNAME);
      const col = db.collection("mycollection");

      // Create image documents from uploaded files

      console.log("Inserting into mongoDB", data)
      // Insert into DB
      const p = await col.insertOne(data);
  } catch (err) {
      console.log("MONGODB INSERT ERROR", err);  
  }
}


app.use(express.static('public'));

// For production build on heroku
if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.post('/api/sendData', function (req, res) {
  console.log("Received submit data");
  
  const {data} = req.body;
  console.log(data);

  mongoDB_insert(data);
})


app.listen(process.env.PORT || 5000);