const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Connected Successfully!!');
  });
const app = require('./app');

const port = 3000;
app.listen(port, () => {
  console.log(`Application is started on port ${port} ...`);
});
