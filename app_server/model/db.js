const mongoose = require('mongoose');

//var dbURI = "mongodb+srv://myAtlasDBuser:RTKA53@myatlasclusteredu.7ci8cvq.mongodb.net/";
 const dbURI="mongodb://localhost:27017/restaurantfinder";
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);  
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
 
require("./users")
require("./location")