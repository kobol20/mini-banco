const express = require("express");
const router = express.Router();

const user = require("../controllers/cuenta.controller");

router.get("/", cuenta.getSaldo);

router.post("/", cuenta.postSaldo);

module.exports = router;