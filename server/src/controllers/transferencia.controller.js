const Transfer = require("../models/transferencia");

const transferCtrl = {};

transferCtrl.getTransferencias = async(req, res, next) => {
    const transfers = await Transfer.find();
    res.json(transfers);
};

transferCtrl.createTransferencia = async(req, res, next) => {
    try {
        const transfer = new Transfer({
            cuenta: req.body.cuenta,
            rut: req.body.rut,
            monto: req.body.monto,
            tipo: req.body.tipo
        });
        await transfer.save();
        res.json({ status: "Transfer created" });
    } catch (error) {
        res.json(error.message);
    }
};

module.exports = transferCtrl;