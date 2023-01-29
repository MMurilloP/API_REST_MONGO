const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


const Product = mongoose.model('Product', new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: String,
    },
    description: {
        type: String,
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider'
    },
}));

module.exports = Product;


// Modelo---->

// const p = new Product({
//     title: "Name",
//     price: 1,
//     description: "Description ",
//     provider: "provider name"
// });
