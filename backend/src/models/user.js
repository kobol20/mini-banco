const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const { Schema } = mongoose;

const userSchema = new Schema({
    nombre: { type: String, required: true },
    rut: { type: String, required: true, unique: true },
    correo: { type: String, required: true },
    pass: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);