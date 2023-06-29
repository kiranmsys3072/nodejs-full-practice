const express=require('express');
const productRoutes=express.Router()

const products=[
    {
        "id": 1,
        "title": "Watch",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Titan",
        "category": "Electronics",
        "thumbnail": "...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwh_Fy-VSeGM6rDHww829apm071ycFkKmNn41pjBAv&s"
      },
      {
        "id": 2,
        "title": "i phone",
        "description": "An apple mobile which is nothing like apple",
        "price": 45000,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "Electronics",
        "thumbnail": "...",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCKLaPXYf0uA37sKmPGtgaILT8cVTE1RT5vK-5g0ehr5Mxa6rMZiYqDHkRpKaoE8PaH8&usqp=CAU"
      },
      {
        "id": 3,
        "title": "jeans",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "company": "Sin",
        "category": "Clothing",
        "thumbnail": "...",
        "image":"https://media.istockphoto.com/id/639511940/photo/beautiful-denim-pants.jpg?s=612x612&w=0&k=20&c=aMeomXPDGFvk9sgbliTNamQhvrnEznVtjp4FfTgY_SY="
      },
      {
        "id": 4,
        "title": "Shirt",
        "description": "An apple mobile which is nothing like apple",
        "price": 45000,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Highlander",
        "category": "Clothing",
        "thumbnail": "...",
        "image":""
      }
]

function routing(routes){
  productRoutes.get('/' ,function(req,res){
    res.render("products",{title:"Products Page",data:products,routes:routes})

})

productRoutes.get('/details',function(req,res){
    res.send('Products Details')
})
return productRoutes

}

module.exports=routing
