const conexion = require('../database/conexion');
controlador ={}
 

controlador.listar_Compras=(req,res)=>{
    let sql="select * from Compra";
    conexion.query(sql,(err,rows)=>{
        if(!err){
           //res.json(rows);//
           res.render('listaCompra.ejs',{rows});
        }
        else{
            console.log('error al listar la tabla de Compras'+ err);
        }
    });  
}

controlador.registrarCompras=(req,res)=>{
    try{
        var codi=req.body.codi;
        var fec=req.body.fec;
        var val=req.body.val;
        var met=req.body.met;
        var usu=req.body.usu;
        var env=req.body.env;
        var sql = `insert into Compra(id_compra,fecha_com,valor_com,metodo_pago,fk_envio,fk_usuario) values(${codi},'${fec}',${val},'${met}',${usu},${env})`;
        conexion.query(sql,(err,rows)=>{
            res.send('se registro');
        });
}catch(error){
    res.send(error);
}
};

module.exports=controlador;