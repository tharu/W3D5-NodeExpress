const express = require('express');
const app = express();

const router=express.Router();
const path = require('path');


router.get("/result", (req, res) => {
   let name=""; let age="";
    if(req.query.name){
        name= req.query.name;
    }
    if(req.query.age){
        age= req.query.age;
    }
    res.send(`Welcome ${name}  age  ${age}`);
});

