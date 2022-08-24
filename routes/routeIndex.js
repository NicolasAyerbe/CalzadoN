const express=require('express');
const rutaindex= express.Router();   

const controladorindex= require('../controllers/controllerindex');


rutaindex.get('/',controlador.index);


module.exports= rutaindex; 