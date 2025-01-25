const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  farmer_name: { type: String, required: true },
});

const varietySchema = new mongoose.Schema({
  variety_name: { type: String, required: true },
});

const activitySchema = new mongoose.Schema({
  activity_name: { type: String, required: true },
  rate: { type: Number, required: true },
});

const transactionSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'Farmer', required: true },
  variety: { type: mongoose.Schema.Types.ObjectId, ref: 'Variety', required: true },
  activity: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity', required: true },
  Bags: { type: Number, required: true },
  weight: { type: Number, required: true },
  rate: { type: Number, required: true },
  amount: { type: Number, required: true },
});

const Farmer = mongoose.model('Farmer', farmerSchema);
const Variety = mongoose.model('Variety', varietySchema);
const Activity = mongoose.model('Activity', activitySchema);
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = {
  Farmer,
  Variety,
  Activity,
  Transaction,
};
