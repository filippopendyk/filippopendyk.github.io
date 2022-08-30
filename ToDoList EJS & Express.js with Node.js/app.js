const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Eat breakfast", "Take classes", "Go gym"];

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/", function(req,res){
    let day = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})
    res.render("index", {currentDay: day, newItems: items});
})

app.post("/", function(req,res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})



app.listen(3000, function(req,res){
    console.log("server running on port 3000");
})