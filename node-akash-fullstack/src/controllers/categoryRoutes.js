const express=require('express');
const categoryRoutes=express.Router()

const category=[
   {
    id:1,
    category:"mobiles",
    thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwh_Fy-VSeGM6rDHww829apm071ycFkKmNn41pjBAv&s"
   },
   {
    id:2,
    category:"watches",
    thumb:"https://cdn.shopify.com/s/files/1/0615/1631/6729/files/mobiles.jpg?v=1664280076&width=360"
   },
   {
    id:3,
    category:"clothing",
    thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAx4Th5f76eDR1YKG71IVhI9EUINuNF7Y-1A&usqp=CAU"
   }
      
]

function categoryRouting(routes){
    categoryRoutes.get('/' ,function(req,res){
        res.render('category',{title:"Category Page",data:category,routes:routes})
    
    })
    
    categoryRoutes.get('/details',function(req,res){
        res.send('Category Details')
    })

    return categoryRoutes

}


module.exports=categoryRouting