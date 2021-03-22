const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const { Schema } = mongoose;

const cuentaSchema = new Schema({
    cuenta: { type: String, required: true, unique: true },
    rut: { type: String, required: true, unique: true },
    monto: { type: Number, required: true },
    saldo: { type: Number, required: true },
}, {
    versionKey: false,
    timestamps: true,
});

cuentaSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Cuenta", cuentaSchema);