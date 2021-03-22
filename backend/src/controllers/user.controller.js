const User = require("../models/user");

const userCtrl = {};

userCtrl.getUsers = async(req, res, next) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUser = async(req, res, next) => {
    try {
        const user = new User({
            nombre: req.body.nombre,
            rut: req.body.rut,
            correo: req.body.correo,
            pass: req.body.pass,
        });
        await user.save();
        res.json({ status: "User created" });
    } catch (error) {
        res.json(error.message);
    }
};

userCtrl.getUser = async(req, res) => {
    const { correo } = req.params;
    try {
        console.log('getUser : ', correo);
        const users = await User.find({}, { correo, pass });
        console.log('backend user ', user);
        var user = users.find(x => x.correo === correo);
        res.json(users);
    } catch (err) {
        console.log('Error al obtener usuario : ', err.message);
    }
};

userCtrl.editUser = async(req, res, next) => {
    const { id } = req.params;
    await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "Usuario Updated" });
};

userCtrl.deleteUser = async(req, res, next) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: "User Deleted" });
};

module.exports = userCtrl;