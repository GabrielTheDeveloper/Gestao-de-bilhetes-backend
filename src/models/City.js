const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  id: String,
  name: String,
  ticketPrice: Number,
  lunchTicketPrice: Number,
  commission: Number,
  totalTickets: Number,
  ticketsAvailable: Number, 
  ticketsSold: { type: Number, default: 0 },
  lunchTicketsSold: { type: Number, default: 0 },
  totalRevenue: { type: Number, default: 0 },
});

const City = mongoose.model('City', citySchema);
module.exports = City;