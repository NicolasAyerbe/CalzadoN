const express=require('express');
const rutaDetalle_compra= express.Router();   

const controladorDetalle_compra= require('../controllers/controllerDetalle');


rutaDetalle_compra.get('/listar_Detalle_compras',controlador.listar_Detalle_compras);
rutaDetalle_compra.post('/registrar_Detalle_compra',controlador.registrarDetalle_compras);


module.exports= rutaDetalle_compra; 