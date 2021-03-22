const mongoose = require("mongoose");

//const URI = "mongodb://localhost/minibanco";
const URI = "mongodb+srv://fherrera:fherrera2021@cluster0.lnniu.mongodb.net/minibanco?retryWrites=true&w=majority";

mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then((db) => console.log("db is connected"))
    .catch((err) => console.error(err));

module.exports = mongoose;