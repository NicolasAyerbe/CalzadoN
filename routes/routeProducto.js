const express=require('express');
const rutaProducto= express.Router();   

const controladorProducto= require('../controllers/controllerProducto');


rutaProducto.get('/listar_productos',controlador.listar_Productos);
rutaProducto.post('/registrar_Producto',controlador.registrarProductos);


module.exports= rutaProducto;  