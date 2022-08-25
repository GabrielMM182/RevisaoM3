const express = require ("express");
const app = express();

// const router = require('./routes/router');

const port = 3000;

// app.use(router);

app.use(express.json());
app.listen(port)