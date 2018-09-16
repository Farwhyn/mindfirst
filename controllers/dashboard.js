const Form = require('../models/FormData.js');

exports.getForms = (req, res) => {
  Form.find((err, docs) => {
    res.render('dashboard', { forms: docs });
  }).select(['-_id', '-date']);
};
