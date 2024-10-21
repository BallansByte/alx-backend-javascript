const express = require('express');
const app = express();

// Route for the root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Route for the cart endpoint with ID validation
app.get('/cart/:id([0-9]+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// If the cart ID is not a number, return 404
app.get('/cart/:id', (req, res) => {
  res.status(404).send('Not Found');
});

// Start the server on port 7865
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
