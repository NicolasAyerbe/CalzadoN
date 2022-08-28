const {response, query} = require('express');
const conexion = require('../database/conexion');
const controlador = {}

controlador.AbrirFrmCatalogo=(req,res)=>{
    res.render('FrmCatalogo.ejs');
}
controlador.listarCatalogos=(req,res)=>{
    let sql = 'select * from categoria';
    conexion.query(sql,(error,datos)=>{
        if(!error) res.json(datos);
        else console.log('error listar los catalogo');
    });
}

controlador.registrarCatalogo=(req,res)=>{
    let {ident,nomb} = req.body;
    let sql=`insert into categoria (codigo_categoria,nombre_categoria) 
    values('${ident}','${nomb}')`;
    conexion.query(sql,(error,datos)=>{
        console.log(sql);
        if(!error)res.send("Se registro con exito la categoria");
        else res.send("No se registro " + error );
    });
}

controlador.BuscarCatalogo=(req,res)=>{
    let id= req.params.identificacion;
    let sql = ` select * from categoria where codigo_categoria=${id}`;
    conexion.query(sql,(error,datos)=>{
        if(!error) res.json(datos);
        else console.log('error listar la categoria');
    })
}


controlador.actualizarCatalogo=(req,res)=>{
    let {ident,nomb} = req.body;

    let sql=`update categoria set nombre_categoria='${nomb}'
    where codigo_categoria=${ident}`;
    conexion.query(sql,(error,datos)=>{
        console.log(sql);
        if(!error)res.send("Se Actualizo con exito la categoria");
        else res.send("No se actualizo " + error );
    });

}

controlador.Eliminar_Catalogo=(req,res)=>{
    var id=req.body.identificacion;

    var sql = `delete from categoria where codigo_categoria=${id}`;
    conexion-query(sql,(err,rows)=>{
        if(!err){
            res.send("Cateoria eliminada");
        }else{
            console.log('error al eliminar la tabla de Catalogo'+ err);
        }
    });
}
module.exports = controlador;