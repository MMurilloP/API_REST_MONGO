const { Schema, model } = require("mongoose");


const ProviderSchema = Schema({
    _id: {
        type: String,
    },    
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
})

module.exports = model("Provider", ProviderSchema, "Providers");
