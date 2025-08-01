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

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin:  "https://bullnestdashboard.netlify.app",
  credentials: true
}));

// MongoDB Connection
const MONGO_URL = process.env.MONGO_DB;
async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB:", error);
    process.exit(1);
  }
}
main();

// Data routes (unchanged)
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully", order: newOrder });
  } catch (error) {
    res.status(400).json({ error: "Failed to save order" });
  }
});

// Authentication routes
app.post("/signup", async (req, res) => {
  try {
    // Validate input
    if (!req.body.username || !req.body.password || !req.body.name) {
      return res.status(400).json({ 
        success: false,
        message: "Username, password, and name are required" 
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(409).json({ 
        success: false,
        message: "Username already exists" 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create user
    const user = new User({
      username: req.body.username,
      name: req.body.name,
      password: hashedPassword,
    });

    await user.save();
    
    return res.status(201).json({ 
      success: true,
      message: "Signup successful",
      user: {
        username: user.username,
        name: user.name
      }
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ 
      success: false,
      message: "Internal server error during signup" 
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    // Validate input
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ 
        success: false,
        message: "Username and password are required" 
      });
    }

    // Find user
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: "Invalid credentials" 
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ 
        success: false,
        message: "Invalid credentials" 
      });
    }

    // Create tokens
    const accessToken = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.ACCESS_SECRET_KEY,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.REFRESH_SECRET_KEY,
      { expiresIn: "7d" }
    );

    // Save refresh token
    await new Token({ token: refreshToken }).save();

    // Set cookies (optional)
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
      user: {
        username: user.username,
        name: user.name
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ 
      success: false,
      message: "Internal server error during login" 
    });
  }
});

// Token verification endpoint
app.post("/verifyToken", async (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ isValid: false, message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(404).json({ isValid: false, message: "User not found" });
    }

    return res.json({ 
      isValid: true,
      user: {
        username: user.username,
        name: user.name
      }
    });
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(403).json({ isValid: false, message: "Invalid or expired token" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something broke!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
