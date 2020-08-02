require("./config/config.js");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//Configuracion global de rutas en index.html

app.use(require("./rutas/index"));




mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) throw err;
        console.log("Base de datos ONLINE");
    });

app.listen(process.env.PORT, () => {

    console.log("Escuchando en el puerto 3000");

});