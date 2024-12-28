 require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./model/user.js");
const Token = require("./model/token.js");

const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");

const PORT = process.env.PORT || 8080;

const app = express();

// CORS configuration
app.use(cors({
  origin: "https://blogwebsite318.netlify.app",  // Replace with your frontend domain
  methods: ["POST", "GET", "OPTIONS"],
  allowedHeaders: ["Authorization", "Content-Type"],
}));

// Use built-in middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
const MONGO_URL = process.env.MONGO_DB;
async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
}

main();

// app.get("/addHoldings", (req, res) => { ... });

// app.get("/addPositions", (req, res) => { ... });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order saved!");
});

app.post("/signup", async(request,response) => {
  try {
    //const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(request.body.password, 10);

    const user = {
      username: request.body.username,
      name: request.body.name,
      password: hashedPassword,
    };

    const newUser = new User(user);
    await newUser.save();
    return response.status(200).send({ msg: `signup successfull` });
  } catch (e) {
    return response
      .status(500)
      .send({ msg: `error while signing up the user` });
  }
});

app.post("/login", async(request,response) => {
  let user = await User.findOne({ username: request.body.username });
  if (!user) {
    return response.status(400).json({ msg: "Username does not match" });
  }

  try {
    let match = await bcrypt.compare(request.body.password, user.password);
    if (match) {
      const accessToken = jwt.sign(
        user.toJSON(),
        process.env.ACCESS_SECRET_KEY,
        { expiresIn: "15m" }
      );
      const refreshToken = jwt.sign(
        user.toJSON(),
        process.env.REFRESH_SECRET_KEY
      );

      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      return response
        .status(200)
        .json({
          accessToken: accessToken,
          refreshToken: refreshToken,
          name: user.name,
          username: user.username,
        });

    } else {
      return response.status(400).json({ msg: "Password does not match" });
    }
  } catch (e) {
    return response.status(500).json({ msg: "Error while logging in user" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
