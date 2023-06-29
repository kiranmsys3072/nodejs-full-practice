const express=require('express');
const app=express()
const morgan=require('morgan');
const fs=require('fs')
require('dotenv').config()
const port=process.env.PORT||3030


const productRoutes=require('./src/controllers/productRoutes')
const categoryRoutes=require('./src/controllers/categoryRoutes')

//console logs in file
app.use(morgan('short',{stream:fs.createWriteStream('./app.logs')}))
//static file path
app.use(express.static(__dirname+"/public"))

//html file path views
app.set('views','./src/views')
//set view engine
app.set('view engine',"ejs")

app.get('/',function(req,res){
    res.render("index")
})
app.use('/category',categoryRoutes);
app.use('/products',productRoutes)
app.listen(port,function(err){
    if(err) throw err
    console.log(`server running on port ${port}`)
})