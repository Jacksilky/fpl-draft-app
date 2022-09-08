const express = require('express');
const connectDB = require("./db/connectDB")
const path = require('path');

const app = express();

connectDB()

app.use(express.json());
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/transactions', require('./routes/api/transactions'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));