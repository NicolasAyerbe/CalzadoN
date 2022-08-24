const conexion = require('../database/conexion');
controlador ={}
 
controlador.index=(req,res)=>{
    res.render('index.ejs');
}


module.exports=controlador;