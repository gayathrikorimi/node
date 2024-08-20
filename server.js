//import express module
var express=require('express')
var app=express()
var por=5555;
app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})
app.listen(port,()=>{
    console.log('server running')
})
