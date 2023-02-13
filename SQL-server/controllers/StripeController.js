require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_CREDENTIALS)
const MY_DOMAIN = 'http://localhost:3000';
exports.pay = async (req, res) => {
  
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.stripeId,
                quantity: 1
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
  };
 
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys

exports.addProductToStripe = async (req,res) =>{
  try {
    const product = await stripe.products.create({
      name: req.body.name,
      default_price_data: {
        unit_amount: req.body.price,
        currency: 'gbp',
        
      },
      expand: ['default_price'],
    });
    res.send(product)
  } catch (error) {
    console.log(error)
  }

}