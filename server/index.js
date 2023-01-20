const express = require('express');
const app = express();
const cors = require('cors');
const  {PORT}  = require('./config/config');
const router = require('./router');
const middleware = require('./middleware/auth');
const corsSettings = { origin: 'http://localhost:3000', credentials: true };

const { resolve } = require("path");

const env = require('dotenv').config({ path: './.env' });

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01',
});

app.use(cors(corsSettings));
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(router);

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: 1999,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});


app.get('*', (req, res) => {
  res.status(404).send('Sorry, not found');
});
app.listen(PORT, () => console.log(`Server running on port ${PORT};`));
