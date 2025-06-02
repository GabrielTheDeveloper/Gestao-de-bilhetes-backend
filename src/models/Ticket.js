const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  id: String,
  qrCode: { type: String, unique: true }, 
  cityId: String,
  sellerId: String,
  hasLunch: { type: Boolean, default: false }, 
  status: { type: String, default: 'assigned' },
  assignedAt: { type: String, default: new Date().toISOString() },
  soldAt: { type: String, default: null },
});

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;