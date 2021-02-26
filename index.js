const express = require('express');
const mongoose = require('mongoose');
const godsRoutes = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Gods API routes
app.use('/api/gods/norse', godsRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Home');
});

/**
 * Database connection
 * Listen on server only when database is connected
 */
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) =>
    app.listen(PORT, () => {
      console.log(`Conntected to database, listening on port ${PORT}...`);
    })
  )
  .catch((err) => console.log(err));

// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
