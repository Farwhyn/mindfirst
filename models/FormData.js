const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  email: String,
  date: Date,
  energy: Number,
  feel: Number,
  stress: Number,
  ordinary: Number,
  sleepduration: Number,
  wake: Number,
  mood: String,
  question: String
});

const FormData = mongoose.model('formdata', formSchema, 'formdata', false);
module.exports = FormData;