const mongoose = require('mongoose');

// Database schema for norse gods
const godsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  race: String,
  gender: String,
  father: String,
  mother: String,
  offspring: Array,
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Norse Gods', godsSchema);
