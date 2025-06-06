const mongoose = require('mongoose');

const dbURI = MONGODB_URI||'mongodb://localhost:27017/mydatabase'; 

const connectToDb = mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
console.error('Error connecting to MongoDB:', err);
}
);

module.exports = connectToDb;