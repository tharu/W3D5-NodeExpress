const express = require('express');
const app = express();
app.get('/', (req, res) => {
 let name = req.query.name;
 let age=req.query.age;
 if (!name) {
    name = "Amirtha"; 
 if(!age)
    age=10;
 }
 res.send(`Welcome ${name} age  ${age}`);
});
app.listen(3000);