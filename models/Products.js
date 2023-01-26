const { Schema, model } = require("mongoose");


const ProductSchema = Schema({
    _id: {
        type: String,
    },
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
        type: String,
    },
})

module.exports = model("Product", ProductSchema, "Products");