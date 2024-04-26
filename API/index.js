const fastify = require("fastify")();
const { MongoClient } = require("mongodb");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');

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

fastify.post("/send-message", async (request, reply) => {
  
  const db = await connectDatabase();
  const messages = db.collection("messages");

  try {
    const data = request.body;
    const fullName = data.fullName;
    const message = data.message;
    const createdAt = new Date().getTime();
    const isApproved = false;
    const messageJson ={
        fullName,
        message,
        isApproved,
        createdAt
    }
    console.log(messageJson)
    const result = await messages.insertOne(messageJson);

    reply.send({ success: true });
  } catch (err) {
    reply
      .status(500)
      .send({ success: false, message: "Error sending message" });
  }
});
fastify.get('/get-messages', async (request, reply) => {
  const db = await connectDatabase();
  const messages = db.collection("messages");

  try {
    const messageList = await messages.find({isApproved:true}).toArray();
    reply.send(messageList);
  } catch (err) {
    reply.status(500).send({ success: false, message: "Failed to fetch messages" });
  }
});
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds); // Salt oluştur
  const hashedPassword = await bcrypt.hash(password, salt); // Şifreyi ve salt'ı kullanarak hashleme
  return { hashedPassword, salt };
};
fastify.post("/backend-login-endpoint", async (request, reply) => {
  const db = await connectDatabase();
  const admins = db.collection("admins");
  const { email, password } = request.body; 

  try {
    // Kullanıcının veritabanındaki salt'ını ve hash'ini aldım
    const user = await admins.findOne({ email });
    if (!user) {
      reply.status(401).send({ success: false, message: "There is no admin with this name" });
      return;
    }

    // Girilen şifreyi ve salt'ı kullanarak veritabanındaki hash ile karşılaştırdım
    const isPasswordValid =  await bcrypt.compare(password,user.password)

    if (isPasswordValid) {
      const userJson = {
        email:email
      }
      const token = jwt.sign(userJson,secret);
      reply.status(200).send({ success: true, token:token});
    } else {
      reply.status(401).send({ success: false, message: "Wrong Password" });
    }
  } catch (error) {
    reply.status(500).send({ success: false, message: "Login Error" });
  }
});
fastify.post("/get-unapproved-messages", async (request, reply) => {
  const db = await connectDatabase();
  const messages = db.collection("messages");

  try {
    const data = request.body;
    var decoded = jwt.verify(data.token, secret);
    const messagesList = await messages.find({isApproved:false}).sort({ _id: -1 }).toArray();
    reply.send({ messagesList });
  } catch (err) {
    reply
      .status(500)
      .send({ success: false, message: "Data Fetching Error" });
  }
});


fastify.post("/approve-messages", async (request, reply) => {
  const db = await connectDatabase();
  const messages = db.collection("messages");

  try {
    const data = request.body;
    const id = data.id;

    var decoded = jwt.verify(data.token, secret);
    const messagesList = await messages.updateOne({_id:new ObjectId(id)},{ $set: {isApproved: true} });
    reply.send({ success: true });
  } catch (err) {
    console.log(err)
    reply
      .status(500)
      .send({ success: false, message: "Data Fetching Error", err });
  }
});

fastify.post("/reject-messages", async (request, reply) => {
  const db = await connectDatabase();
  const messages = db.collection("messages");

  try {
    const data = request.body;
    const id = data.id;

    var decoded = jwt.verify(data.token, secret);
    const messagesList = await messages.deleteOne({_id:new ObjectId(id)});
    reply.send({ success: true });
  } catch (err) {
    console.log(err)
    reply
      .status(500)
      .send({ success: false, message: "Data Fetching Error", err });
  }
});



fastify.listen({ port: 3000 }, (err) => {
    if (err) {
      console.error("Error starting server:", err);
      process.exit(1);
    }
    console.log("Server listening on port 3000");
  });