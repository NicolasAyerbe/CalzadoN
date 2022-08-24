const conexion = require('../database/conexion');
controlador ={}


controlador.listar_Catalogos=(req,res)=>{
    let sql="select * from Catalogo";
    conexion.query(sql,(err,rows)=>{
        if(!err){
           //res.json(rows);//
           res.render('listaCatalogo.ejs',{rows});
        }
        else{
            console.log('error al listar la tabla de Catalogos'+ err);
        }
    });  
}

controlador.registrarCatalogos=(req,res)=>{
    try{
        var codi=req.body.codi;
        var nomb=req.body.nomb;
        var sql = `insert into Catalogo (id_catalogo,nombre_cat) values(${codi},'${nomb})`;
        conexion.query(sql,(err,rows)=>{
            res.send('se registro');
        });
}catch(error){
    res.send(error);
}
};

module.exports=controlador;