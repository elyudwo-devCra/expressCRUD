const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const sequelize = require('./config/database');

app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/user', userRouter);

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
