const express=require('express');
const categoryRoutes=express.Router()

const category=[
    [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"
]
      
]
categoryRoutes.get('/' ,function(req,res){
    res.send(category)

})

categoryRoutes.get('/details',function(req,res){
    res.send('Category Details')
})

module.exports=categoryRoutes