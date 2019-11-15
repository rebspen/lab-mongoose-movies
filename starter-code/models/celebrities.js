const mongoose = require('mongoose');

const celebSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1
    },
    occupation: {
      type: String,
      required: true,
      minlength: 1
    },
    catchPhrase: {
      type: String,
      required: true,
      minlength: 1
    }
  }
);

const Celebrity = mongoose.model('Celebrity', celebSchema);

module.exports = Celebrity;