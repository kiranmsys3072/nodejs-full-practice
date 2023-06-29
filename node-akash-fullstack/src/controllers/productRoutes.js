const express=require('express');
const productRoutes=express.Router()

const products=[
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "...",
        "images": ["...", "...", "..."]
      },
      {
        "id": 2,
        "title": "TV 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "telivisions",
        "thumbnail": "...",
        "images": ["...", "...", "..."]
      }
]
productRoutes.get('/' ,function(req,res){
    res.send(products)

})

productRoutes.get('/details',function(req,res){
    res.send('Products Details')
})
module.exports=productRoutes
