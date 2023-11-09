const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const booksRoute = require('./routes/books');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
console.log(process.env.MONGO_URL);
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Mongodb connected!"));

app.use(express.urlencoded({extended: false}));

app.use('/books', booksRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
