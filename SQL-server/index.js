const env = require('dotenv').config({path: './.env'})
const express = require('express');
const app = express();
const cors = require('cors');
const  PORT  = 4002
const router = require('./router');

// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1099,
//   currency: 'usd',
//   payment_method_types: ['card'],
// });


const sequelize = require('./models/index')
const MY_DOMAIN = 'http://localhost:4002';

app.get('/secret', async (req, res) => {
  const intent = // ... Fetch or create the PaymentIntent
  res.json({client_secret: intent.client_secret});
}); 

app.post("/checkout", async (req, res) => {
  
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item)=> {
      lineItems.push(
          {
              price: item.id,
              quantity: item.quantity
          }
      )
  });

  const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${MY_DOMAIN}/success`,
      cancel_url: `${MY_DOMAIN}/cancel`
  });

  res.send(JSON.stringify({
      url: session.url
  }));
});


app.use(cors());

app.use(express.json({limit: "100mb"
}));
app.use(router);
app.listen(PORT,()=>{ console.log(`Server listening on port ${PORT}`)})

sequelize.authenticate()

  
