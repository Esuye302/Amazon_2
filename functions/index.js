const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "working!!!!!!!",
  });
});

app.post("/create/payment", async (req, res) => {
  console.log("Payment request received:", req.query.total);

  const total = parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    console.log("Payment Intent Created:", paymentIntent.client_secret);

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    console.log("Invalid payment total:", total);
    res.status(401).json({
      message: "Total must be greater than 0",
    });
  }
});


exports.api = onRequest(app);
