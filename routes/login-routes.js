const express = require("express");
const Login = require("../model/login.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { generate } = require("rxjs");

const app = express();

const generateSecretKey = () => {
  const byteLength = 32;
  const buffer = crypto.randomBytes(byteLength);
  
  return buffer.toString('hex');
}

const secretKey = generateSecretKey();

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    
    const user = await Login.findOne({ username });

    if (!user) {
        // User not found
        return res.status(404).json({ message: "User not found" });
    }

    // User status
    // if(user.status !== 'Verified'){
    //   return res.status(403).json({ message: "Account is not verified"});
    // }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
      return res.status(401).json({ message: 'Invalid credentials'});
    }

    // Create JWT Token
    const token = jwt.sign({ userId: user._id}, secretKey, { expiresIn: '1h'});
  
    res.status(200).json({ token, status: user.status, role: user.role, username: user.username});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;