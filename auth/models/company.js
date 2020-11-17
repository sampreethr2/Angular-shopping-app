// const Product = require('../models/product.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const CompanySchema = mongoose.Schema({
    name: String,
    products: Array
});

module.exports = mongoose.model('Company', CompanySchema);