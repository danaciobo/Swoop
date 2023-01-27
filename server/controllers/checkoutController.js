const stripe = require('stripe')(process.env.STRIPE_KEY)

exports.checkout = async (req, res) => {

 const cartT = req.body.cart;

  const line_items = cartT.map((cartItem) => {
    return {
      price_data: {
        currency: 'gbp',
        product_data: {
          name: cartItem.title,
          description: cartItem.description
        },
        unit_amount: cartItem.price * 100,
      },
      quantity: 1,
    }
}
  )
  console.log(line_items)

  const session = await stripe.checkout.sessions.create({
    line_items,
    payment_method_types: ['card'],
    shipping_address_collection: {allowed_countries: ['GB', 'US']},
  shipping_options: [
    {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {amount: 295, currency: 'gbp'},
        display_name: 'Royal Mail Tracked',
        delivery_estimate: {
          minimum: {unit: 'business_day', value: 1},
          maximum: {unit: 'business_day', value: 2},
        },
      },
    },
  ],
  phone_number_collection: {
    enabled: true
  },
    mode: 'payment',
    success_url: `${process.env.REACT_APP_HOST}/success`,
    cancel_url: `${process.env.REACT_APP_HOST}/cart`,
  });

  res.send({ url: session.url });
};
