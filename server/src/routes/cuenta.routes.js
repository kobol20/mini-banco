const express = require("express");
const router = express.Router();

const cuenta = require("../controllers/cuenta.controller");

router.get("/", cuenta.getCuenta);

router.post("/", cuenta.postCuenta);

router.put("/:id/:saldo", cuenta.putSaldo);

module.exports = router;