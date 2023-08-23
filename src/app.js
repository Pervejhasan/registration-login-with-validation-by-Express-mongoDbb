const express=require('express');
const path=require('path');
const hbs=require('hbs');
require('dotenv').config();
require('./db/connection')



const port=process.env.PORT||3000;
const app=express();
//static page show

/*
const staticPath=path.join(__dirname,"../public")
app.use(express.static(staticPath))
*/

// show handlebars file
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);
app.get('/',(req,res)=>{
res.render('index')
})



app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})