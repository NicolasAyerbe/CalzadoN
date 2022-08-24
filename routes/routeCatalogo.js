const express=require('express');
const rutaCatalogo= express.Router();   

const controladorCatalogo= require('../controllers/controllerCatalogo');


rutaCatalogo.get('/listar_Catalogos',controlador.listar_Catalogos);
rutaCatalogo.post('/registrar_Catalogo',controlador.registrarCatalogos);


module.exports= rutaCatalogo;