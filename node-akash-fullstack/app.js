const express=require('express');
const app=express()
const morgan=require('morgan');
const fs=require('fs')
require('dotenv').config()
const port=process.env.PORT||3030


// const productRoutes=require('./src/controllers/productRoutes')
// const categoryRoutes=require('./src/controllers/categoryRoutes')

//console logs in file
app.use(morgan('short',{stream:fs.createWriteStream('./app.logs')}))

//static file path
app.use(express.static(__dirname+"/public"))

//html file path views
app.set('views','./src/views')
//set view engine
app.set('view engine',"ejs")

//routes
const routes=[
    {
        path:'/',
        key:"Home"
    },
    {
        path:'/category',
        key:"Category"
    },
    {
        path:'/products',
        key:"Products"
    }

]
const productRoutes=require('./src/controllers/productRoutes')(routes)
const categoryRoutes=require('./src/controllers/categoryRoutes')(routes)


app.get('/',function(req,res){
   
    res.render("index",{title:"INDEX PAGE",routes:routes})
})
app.use('/category',categoryRoutes);
app.use('/products',productRoutes)
app.listen(port,function(err){
    if(err) throw err
    console.log(`server running on port ${port}`)
})