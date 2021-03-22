const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
// const corsOptions = {origin: "http://localhost:4200"}
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/cuenta", require("./routes/cuenta.routes"));
app.use("/api/transfer", require("./routes/transferencia.routes"));


module.exports = app;