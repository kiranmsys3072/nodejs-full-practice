//fs module
const fs=require('fs');
const http=require('http');

// fs.writeFile('text1.txt',"this is writing from writefile method changed...",function(){
//     console.log("file created")
// })

// fs.appendFile('text1.txt',"this is writing from appendfile method  \r\n",function(){
//     console.log("file created")
// })

// fs.readFile('text1.txt',"utf-8",function(err,data){
//     if(err) throw err;
//     console.log(data)
// })

// fs.readFile('db.json',"utf-8",function(err,data){
//     if(err) throw err;
//     console.log(data)
// })


// const server=http.createServer((req,res)=>{
//     res.write('<h1>Hello NodeJs World</h1>')
//     res.end()
// })

// server.listen(4040,()=>{
//     console.log("server started 4040")
// })

//fake static server


const server=http.createServer((req,res)=>{

    fs.readFile('db.json',"utf-8",function(err,data){
        if(err) throw err;
        res.write(data)
        res.end()
        
    })
    
})

server.listen(4040,()=>{
    console.log("server started 4040")
})


//os module
// const os=require('os');

// console.log(os.cpus().length)