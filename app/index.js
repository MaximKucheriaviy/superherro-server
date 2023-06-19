const express = require('express');
const cors = require('cors');
const { userRouter } = require('./routes');
const {morgan, defaultError, errorCatcher} = require('./middlewares');

const app = express();

app.use(cors());
app.use(morgan.morganLogger(morgan.morganSetup));
app.use(express.json());
app.use("/users", userRouter);
app.use("/", defaultError);
app.use("/", errorCatcher);


module.exports = app;