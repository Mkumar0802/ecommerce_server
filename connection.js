const mongoose = require("mongoose");

const { MongoClient } = require("mongodb");



let MONGODB_URL=process.env.MONGODB_URL;
let MONGODB_NAME = "ecommercedb";

mongoose.connect(MONGODB_URL, { useNewUrlParser: true }) .then(() => console.log("MongoDB connected")) .catch((err) => console.log(err));



let client = new MongoClient(MONGODB_URL);
let mongo = {
  db: null,
  products: null,
  async connect() {
    try {
      await client.connect();
      this.db = client.db(MONGODB_NAME);
      this.products = this.db.collection("user");
      console.log("Selected Database:-", MONGODB_NAME);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = mongo;