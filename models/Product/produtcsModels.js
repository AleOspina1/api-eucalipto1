const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const schemaProducto = new Schema({
    idProducto : {type: Number, required:true },
    descripcion:{ type: String, required: true},
    valorUnitario : { type: Number, required: true },    
    estado : { type: String, required: true}

},{
    timestamps: true
});

const Products = model('Products', schemaProducto)
module.exports = Products;