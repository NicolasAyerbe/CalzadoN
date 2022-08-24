const conexion = require('../database/conexion');
controlador ={}
 

controlador.listar_Detalle_compras=(req,res)=>{
    let sql="select * from detalle_compra";
    conexion.query(sql,(err,rows)=>{
        if(!err){
           //res.json(rows);//
           res.render('listaDetalle.ejs',{rows});
        }
        else{
            console.log('error al listar la tabla de Detalle_compras'+ err);
        }
    });  
}

controlador.registrarDetalle_compras=(req,res)=>{
    try{
        var codi=req.body.codi;
        var can=req.body.can;
        var uni=req.body.uni;
        var tot=req.body.tot;
        var com=req.body.com;
        var pro=req.body.pro;
        var sql = `insert into detalle_compra(id_det,precio_unitario,total,fk_compra,fk_producto) values(${codi},${can},${uni},${tot},${com},${pro})`;
        conexion.query(sql,(err,rows)=>{
            res.send('se registro');
        });
}catch(error){
    res.send(error);
}
};

module.exports=controlador;