const express = require('express');
const router = express.Router();

const Stripe = require('stripe')
('pk_test_51OI5cQFJVgn6guIM8ETNoutWzBtqvvPp615Yv5KwEFkLAaQiEPhM3RGIzjDWGn8dL3gSQRmDU21zs1t0tqP9Iyks00DZct9dJH');

router.post('/', async (req, res) => { console.log(req.body)
    let status, error;
    const { token, amount } = req.body;
    try {
      await Stripe.charges.create({
        source: token.id,
        amount,
        currency: 'usd',
      });
      status = 'success';
    } catch (error) {
      console.log(error);
      status = 'Failure';
    }
    res.json({ error, status });
  });

module.exports = router;
