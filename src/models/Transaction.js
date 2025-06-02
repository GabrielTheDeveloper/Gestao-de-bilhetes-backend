const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  id: String,
  qrCode: String,
  sellerId: String,
  cityId: String,
  ticketValue: Number,
  lunchValue: Number,
  totalValue: Number,
  commission: Number,
  date: { type: String, default: new Date().toISOString() },
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;