const express = require('express');
const errorHandler = require('./src/middleware/errorHandler');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT;

app.use(express.json())
app.use("/api/user", require("./src/routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});