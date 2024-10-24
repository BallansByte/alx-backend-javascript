const express = require('express');
const app = express();
const port = 7865;

// Existing endpoint here...

// New endpoint: GET /cart/:id
app.get('/cart/:id([0-9]+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
});

// Catch all for invalid cart IDs (non-numeric)
app.get('/cart/:id', (req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});
