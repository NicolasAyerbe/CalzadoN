const express=require('express');
const rutaCompra= express.Router();   

const controladorCompra= require('../controllers/controllerCompra');


rutaCompra.get('/listar_Compras',controlador.listar_Compras);
rutaCompra.post('/registrar_Compra',controlador.registrarCompras);


module.exports= rutaCompra; 