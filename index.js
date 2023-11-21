const express = require('express');
const errorHandler = require('./src/middleware/errorHandler');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json())
app.use("/api/user", require("./src/routes/userRoutes"));
app.use("/api/hobby", require("./src/routes/hobbyRoutes"));
app.use("/api/contact", require("./src/routes/contactRoutes"));
app.use("/api/login", require("./src/routes/loginRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});