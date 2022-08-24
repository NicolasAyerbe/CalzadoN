const express= require('express'); 


const bodyparser= require("body-parser");  
const Servidor = express(); 
Servidor.use(express.static(__dirname+'/public')); 

Servidor.use(bodyparser.json());
Servidor.use(bodyparser.urlencoded({extended:false})); 
Servidor.set('view engine','ejs');

Servidor.set('views',__dirname+'/views');

Servidor.use(require('./routes/routeProducto'));
Servidor.use(require('./routes/routeCatalogo'));
Servidor.use(require('./routes/routeCompra'));
Servidor.use(require('./routes/routeDetalle'));
Servidor.use(require('./routes/routeIndex'));

Servidor.post('/ingreso',(peticion,respuesta)=>{
  let {txt, txtc, txtp}=peticion.body;
  if(txt == "empresa"){
       respuesta.render('consultaEmpresa');
  }
  if (txt == "cliente"){
       respuesta.render('consultaCliente');
  }
});

  Servidor.listen(5000,()=>{ 
    console.log("El servidor se esta ejecutando en el puerto 5000"); 
}); 