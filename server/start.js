require('dotenv').config();
const app = require('./index.js');
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server listening with nodemon on port ${port}`);
});