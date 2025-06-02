const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: { type: String, unique: true },
  role: String,
  city: String, 
  commissionRate: { type: Number, default: 0 }, 
  totalCommission: { type: Number, default: 0 },
  password: String,
  isActive: { type: Boolean, default: true },
});

const User = mongoose.model('User', userSchema);
module.exports = User;