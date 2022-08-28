
const mysql= require('mysql');
const conexion=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"calzado_en_la_nube"
    }
);
conexion.connect((error)=>{
    if(!error){
        console.log("Se conecto con exito a la bd");
    }
    else{
        console.log("se presento un error en la conexion "+error);
    }

});

module.exports =conexion;


