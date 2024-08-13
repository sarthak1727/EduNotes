const express = require('express');
const BodyParser = require("body-parser");
const https = require("https");
const app = express()
app.use(BodyParser.urlencoded({extended:true}));
const path = require("path");
app.use("/images",express.static("images"))
app.use("/css",express.static("css"))
app.use("/php",express.static("php"))


app.get("/",function(req,res){
    
    res.sendFile(__dirname+"/index.html");
    
})
app.get("/index.html",function(req,res){
    
    res.sendFile(__dirname+"/index.html");
    
})
app.get("/Notes.html",function(req,res){
    
    res.sendFile(__dirname+"/Notes.html");
    
})

app.get("/create.html",function(req,res){
    res.sendFile(__dirname+"/create.html")
})
app.post("/create.html",function(req,res){
    res.sendFile(__dirname+"/create.html")
})

app.get("/Plans.html",function(req,res){
    res.sendFile(__dirname+"/Plans.html")
})
app.get("/todo.html",function(req,res){
    res.sendFile(__dirname+"/todo.html")
})
app.get("/deadlines.html",function(req,res){
    res.sendFile(__dirname+"/deadlines.html")
})
app.get("/calendar.html",function(req,res){
    res.sendFile(__dirname+"/calendar.html")
})
app.get("/naviClock.html",function(req,res){
    res.sendFile(__dirname+"/naviClock.html")
})
app.get("/storage.html",function(req,res){
    res.sendFile(__dirname+"/storage.html")
})
app.post("/storage.html",function(req,res){
    res.sendFile(__dirname+"/storage.html")
})
app.get("/storage.html",function(req,res){
    res.sendFile(__dirname+"/storage.html")
})
app.post("/storage.html",function(req,res){
    res.sendFile(__dirname+"/storage.html")
})
app.post("/php/upload.php",function(req,res){
    res.sendFile(__dirname+"/php/upload.php")
})

app.get("/Dashboard.html",function(req,res){
    res.sendFile(__dirname+"/Dashboard.html")
})
app.post("/Dashboard.html",function(req,res){
    res.sendFile(__dirname+"/Dashboard.html")
})

app.get("/PlanNew.html",function(req,res){
    res.sendFile(__dirname+"/PlanNew.html")
})
app.post("/PlanNew.html",function(req,res){
    res.sendFile(__dirname+"/PlanNew.html")
})









app.listen(3000,function(){
    console.log("localhost:3000 started working");
})