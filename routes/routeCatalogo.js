const express=require('express');
const rutaCatalogo= express.Router();   

const controladorrutaCatalogo = require('../controllers/controllerCatalogo');

rutaCatalogo.get('/FrmrutaCatalogo',controladorrutaCatalogo.AbrirFrmrutaCatalogo);
rutaCatalogo.get('/listarrutaCatalogos',controladorrutaCatalogo.listarrutaCatalogos);
rutaCatalogo.post('/registrarrutaCatalogo',controladorrutaCatalogo.registrarrutaCatalogo);
rutaCatalogo.get('/BuscarrutaCatalogo/:identificacion',controladorrutaCatalogo.BuscarrutaCatalogo);
rutaCatalogo.post('/actualizarrutaCatalogo',controladorrutaCatalogo.actualizarrutaCatalogo);
rutaCatalogo.post('/Eliminar_Usuario',controladorrutaCatalogo.Eliminar_Usuario);


module.exports= rutaCatalogo; 