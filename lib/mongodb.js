import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

// 🚨 Ensure you have a valid URI
if (!uri) {
  throw new Error("❌ Please add your MongoDB connection string to .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable to preserve the connection across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect()
      .then((client) => {
        console.log("✅ Connected to MongoDB (development)");
        return client;
      })
      .catch((err) => {
        console.error("❌ MongoDB connection failed:", err.message);
        throw err;
      });
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, always create a new client
  client = new MongoClient(uri, options);
  clientPromise = client.connect()
    .then((client) => {
      console.log("✅ Connected to MongoDB (production)");
      return client;
    })
    .catch((err) => {
      console.error("❌ MongoDB connection failed:", err.message);
      throw err;
    });
}

export default clientPromise;
