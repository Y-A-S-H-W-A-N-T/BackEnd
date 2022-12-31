const port = 80;
const express = require('express');
const fs = require('fs');
const { Agent } = require('http');
const app=express();
const path = require('path');

app.use('/static', express.static('public'));
app.use(express.urlencoded());

app.set('view engine','pug');


app.set('views',path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  const name = 'DAVULURI';
  const con = 'WORKING!!';
  const pas = {'title': name , 'content': con};
  res.render('demo',pas);
})
app.post('/', (req, res) => {
  Name = req.body.name;
  Age = req.body.age;
  Address = req.body.address;
  About = req.body.more;
  let info =`
  Name = ${Name}
  Age = ${Age}
  Address = ${Address} 
  About = ${About}
  `
  fs.writeFileSync('Information.txt',info);
  res.render('demo');
})
/*
app.get("/",(req,res)=>{
    res.send("HOME PAGE");
})
app.get("/about",(req,res)=>{
  res.send("ABOUT PAGE");
})
app.get("/contact",(req,res)=>{
  res.send("CONTACT PAGE");
})
*/
app.listen(port,()=>{
    console.log(`LISTENING at port ${port}`);
})