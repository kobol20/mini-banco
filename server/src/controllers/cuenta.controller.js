const User = require("../models/cuenta");

const cuentaCtrl = {};

cuentaCtrl.getSaldo = async(req, res) => {
    const cuenta = await Cuenta.find();
    res.json(cuenta);
};

cuentaCtrl.postSaldo = async(req, res, next) => {
    const { id } = req.params;
    await Cuenta.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "Cuenta Updated" });
};

module.exports = cuentaCtrl;