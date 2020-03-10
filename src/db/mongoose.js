const envLoader = require('env-o-loader');
const mongoose = require('mongoose');

const { mongoUrl } = envLoader('../config/db.yaml');

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongodb+srv://demo:<password>@cluster0-tkrat.mongodb.net/test?retryWrites=true&w=majority

demo
BT7GxF3Y2MYIexW5