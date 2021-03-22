const Cuenta = require("../models/cuenta");

const cuentaCtrl = {};

cuentaCtrl.getCuenta = async(req, res) => {
    const cuenta = await Cuenta.find();
    res.json(cuenta);
};

cuentaCtrl.putSaldo = async(req, res) => {
    const { id } = req.params;
    await Cuenta.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "Cuenta Updated" });
};

cuentaCtrl.postCuenta = async(req, res, next) => {
    try {
        const cuenta = new Cuenta({
            cuenta: req.body.cuenta,
            rut: req.body.rut,
            monto: req.body.monto,
            saldo: req.body.saldo,
        });
        await cuenta.save();
        res.json({ status: "Cuenta created" });
    } catch (error) {
        res.json(error.message);
    }

};

module.exports = cuentaCtrl;