const express = require('express');
const morgan = require('morgan');
const UserRouter = require('./routes/UserRoutes');
const tourRouter = require('./routes/TourRoutes');

const app = express();
//
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// route handler
//route
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/tours', tourRouter);

module.exports = app;
