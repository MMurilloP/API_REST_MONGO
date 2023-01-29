const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


const Provider = mongoose.model('Provider', new mongoose.Schema({
    company_name: {
        type: String,
    },
    CIF: {
        type: String,
    },
    adress: {
        type: String,
    },
    url_web: {
        type: String,
    },
}));

module.exports = Provider;


// Modelo---->

// const p = new Product({
//     title: "Name",
//     price: 1,
//     description: "Description goes here",
//     provider: "provider name"
// });
