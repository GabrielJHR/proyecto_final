const express = require("express");
const cors = require('cors')
puerto = 3000;

const app = express();

//esto se tiene que ejecutar antes que el routeador, si no no se podra
//interpretar json, resibidos ni formularios

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use(require('./src/routes/routes'));

app.listen(puerto);

console.log(`server in localhost:${puerto}`);