const express = require('express');
const app = express();
const path = require("path");

let port = 8080;

app.set("views engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/",(req, res)=>{
res.render("home.ejs");
});

app.get("/rolldice",(req, res)=>{
    let diceValue = Math.floor(Math.random()*6)+1;
res.render("rolldice.ejs",{diceValue});
});

app.get("/ig/:instagram",(req, res)=>{
let {instagram} = req.params;
res.render("instagram.ejs",{instagram});
});

app.get("/hello",(req, res)=>{
res.send("hello");
});

app.listen(port,()=>{
    console.log(`listen is check now ${port}`);
})