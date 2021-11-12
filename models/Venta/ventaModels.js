 const mongoose = require("mongoose");

 const { Schema, model } = mongoose;

 const schemaVenta = new Schema(
  {
     idVenta: { type: Number, trim: true, require: true },
     valorVenta: { type: Number, trim: true, require: true },
     idProducto: { type: Number, trim: true, require: true },
     cantidad: { type: Number, trim: true, require: true },
     precioUnitario: { type: Number, trim: true, require: true },
     fecha: { type: String, trim: true, require: true },
     nombreCliente: { type: String, trim: true, require: true },
     documentoCliente: { type: Number, trim: true, require: true },
     vendedor: { type: String, trim: true, require: true },
     estado: { type: String, trim: true, require: true },
   },
   {
     timestamps: true,
   }
 );

 module.exports = model("Ventas", schemaVenta);
