const mongoose = require("mongoose");

const { Schema } = mongoose;

const transferSchema = new Schema({
    cuenta: { type: String, required: true },
    rut: { type: String, required: true },
    monto: { type: Number, required: true },
    tipo: { type: String },
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model("Transferencia", transferSchema);