//=====================================
// Puerto
//=====================================

process.env.PORT = process.env.PORT || 3000;


//=====================================
// Entorno
//=====================================

process.env.NODE_ENV = process.env.NODE_ENV || "dev";


//=====================================
// Vencimiento del token
//=====================================
//60 Segundos
//60 minutos
//24 horas
//30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//=====================================
// SEED de autenticacion
//=====================================
process.env.SEED = process.env.SEED || "este-es-el-seed-desarrollo";



//=====================================
// Base de datos
//=====================================


//=====================================
// CLIENTE ID
//=====================================

process.env.CLIENT_ID = process.env.CLIENT_ID || "102939509371-46atfthisdh5p2ci1c4sk262m19vea9i.apps.googleusercontent.com";

let urlDB;

if (process.env.NODE_ENV === "dev") {
    urlDB = "mongodb://localhost:27017/cafe";

} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;