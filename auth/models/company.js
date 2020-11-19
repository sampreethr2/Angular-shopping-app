// const Product = require('../models/product.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const CompanySchema = mongoose.Schema({
    name: String,
    products: [{
        id: String,
        name: String,
        price: Number,
        photo: String
    }]
});

module.exports = mongoose.model('Company', CompanySchema);