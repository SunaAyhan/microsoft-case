const fastify = require("fastify")();
const { MongoClient } = require("mongodb");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRETKEY
const saltRounds = 1;
async function connectDatabase() {
  const url = "mongodb://localhost:27017";
  const dbName = "visitor-data";

  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}

fastify.register(require("@fastify/cors"), (instance) => {
  return (req, callback) => {
    const corsOptions = {
      origin: true,
    };

  
    if (/^localhost$/m.test(req.headers.origin)) {
      corsOptions.origin = false;
    }

 
    callback(null, corsOptions);
  };
});

fastify.post("/send-review", async (request, reply) => {
  
  const db = await connectDatabase();
  const reviews = db.collection("reviews");

  try {
    const data = request.body;
    const fullName = data.fullName;
    const message = data.message;
    const createdAt = new Date().getTime();

    const messageJson ={
        fullName,
        message,
        createdAt
    }
    console.log(messageJson)
    const result = await reviews.insertOne(messageJson);

    reply.send({ success: true });
  } catch (err) {
    reply
      .status(500)
      .send({ success: false, message: "Error sending review" });
  }
});


fastify.listen({ port: 3000 }, (err) => {
    if (err) {
      console.error("Error starting server:", err);
      process.exit(1);
    }
    console.log("Server listening on port 3000");
  });