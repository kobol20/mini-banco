const express = require("express");
const router = express.Router();

const transfer = require("../controllers/transferencia.controller");

router.get("/", transfer.getTransferencias);

router.post("/", transfer.createTransferencia);

module.exports = router;