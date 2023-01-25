
const stripe = require('stripe')('sk_test_51MTr9bJvTkXt4c3XqzeMuhgswXtG1QJEjwkMeqiSNvTvWcLiEJLteYG1SqGllTU1E9100MQXMf3JGcmQAwFgf8Ft00VmcwaWlp')

exports.pay = async (req, res) => {
  
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