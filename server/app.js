const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Root route
 app.get("/", (req, res) => {
    res.send("Server is running!");
 });

// Routes connect (IMPORTANT FIX)
app.use('/api', router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});