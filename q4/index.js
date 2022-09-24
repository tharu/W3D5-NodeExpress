const express = require('express');
const app = express();
const router=express.Router();
const path = require('path');

// Read post body params
app.use(express.json());
app.use(express.urlencoded());

app.use("/css", express.static(path.join(__dirname, 'css')));



app.get('/', (req, res) => {
     
    const date = new Date();
    const hour = date.getHours();
    const cssFile = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
    console.log(cssFile);
 res.send(`<html>
 <head>
     <meta charset="UTF-8">
     <title>User Info</title>
     <link href="/css/${cssFile}" rel="stylesheet"/>
 </head>
 <body>
     <div>
         <form action="/result" method="post">
             Name : <input type="text" id="txtName" name="name"/>
             Age : <input type="text" id="txtAge" name="age"/>
             <input type="submit" value="Submit"/>
         </form>
     </div>
 </body>
</html>
`);
});
app.listen(3000);


app.post("/result",(req, res) =>{
 
    let name = req.body.name;
    let age = req.body.age;
    console.log(`/output?name=${name}&age=${age}`);
    res.redirect(`/output?name=${name}&age=${age}`);
});



app.get("/output",(req, res) =>{
 
    let name = req.query.name;
    let age=req.query.age;
   
   res.send(`<h1>Welcome ${name} age ${age} </h1>`);
});



