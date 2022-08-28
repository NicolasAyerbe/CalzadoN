const express= require('express'); 
const bodyparser= require("body-parser"); //Se importa el modulo body-parser para recivir parametros 
const Servidor = express(); 
Servidor.use(express.static(__dirname+'/public'));//Se configura la carpeta publica 

Servidor.use(bodyparser.json());//Se configura para recibir parametros json 
Servidor.use(bodyparser.urlencoded({extended:false}));// Se configura para recibir parametros de formularios 
Servidor.set('view engine','ejs');//Se cofigura el motor de plantillas ejs 

Servidor.set('views',__dirname+'/views');//Se cofigura la carpeta contenedora de las vistas 
Servidor.use(require('./routes/routeCatalogo'));
Servidor.use(require('./routes/routeIndex'));
  Servidor.listen(5000,()=>{ 
    console.log("El servidor se esta ejecutando en el puerto 5000"); 
});