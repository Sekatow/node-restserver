const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
let Schema = mongoose.Schema;


let rolesValidos = {
    values: ["ADMIN_ROLES", "USER_ROLE"],
    message: "{VALUE} No es un rol valido"
};

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es necesario"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "El correo es necesario"]
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"]

    },
    img: {
        type: String,
        require: false
    },
    role: {
        type: String,
        default: "USER_ROLE",
        enum: rolesValidos
    }, //default: 
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    } //Boolean
});


usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}


usuarioSchema.plugin(uniqueValidator, {
    message: "{PATH} debe ser ser unico"
});

module.exports = mongoose.model("Usuario", usuarioSchema);