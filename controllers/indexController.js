const productos = [
    {nombre: "Carpaccio fresco",
    descripcion:"Entrada Carpaccio de salmón con cítricos",
    precio: 65.50,
    id:1,
    imagen:"Carpaccio-de-salmon.jpg"},

    {nombre: "Risotto de berenjena",
    descripcion:"Risotto de berenjena y queso de cabra",
    precio: 47.00,
    id:2,
    imagen:"Risotto-berenjena-queso-cabra.jpg"},

    {nombre: "Mousse de arroz",
    descripcion:"Mousse de arroz con leche y aroma de azahar",
    precio:27.50,
    id:3,
    imagen:"Mousse-de-arroz-con-leche.jpg"},

    {nombre: "Espárragos blancos",
    descripcion:"Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio:37.50, 
    id:4,
    imagen:"esparragos.png"},

    {nombre: "milanga",
    descripcion:"",
    precio:37.50, 
    id:5,
    imagen:""}

]
;

const indexController = { 
    home:(req,res) => res.render("home",{title:"Pimienta & Sal",productos}),
    detalle:(req,res) =>{
    const {id} =req.params;
    const producto = productos.find (producto => producto.id ==id)  
    res.render("detalle",{title:producto.nombre,producto})
}}

module.exports=indexController;
