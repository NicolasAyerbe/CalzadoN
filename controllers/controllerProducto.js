const conexion = require('../database/conexion');
controlador ={}
 

controlador.listar_Productos=(req,res)=>{
    let sql="select * from productos";
    conexion.query(sql,(err,rows)=>{
        if(!err){
           //res.json(rows);//
           res.render('listaProductos.ejs',{rows});
        }
        else{
            console.log('error al listar la tabla de productos'+ err);
        }
    });  
}

controlador.registrarProductos=(req,res)=>{
    try{
        var codi=req.body.codi;
        var nomb=req.body.nomb;
        var imag=req.body.imag;
        var desc=req.body.desc;
        var valo=req.body.valo;
        var desu=req.body.desu;
        var stoc=req.body.stoc;
        var cata=req.body.cata;
        var sql = `insert into productos(codigo_pro,nombre_pro,imagen_pro,descripcion_pro,valor_pro,descuento,stock,fk_catalogo) values(${codi},'${nomb}','${imag}','${desc}',${valo},${desu},${stoc},${cata})`;
        conexion.query(sql,(err,rows)=>{
            res.send('se registro');
        });
}catch(error){
    res.send(error);
}
};

module.exports=controlador;