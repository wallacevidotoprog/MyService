const express = require('express');
const server =express();
server.use(express.json());

const cursos=['c1','c2','c3','c4','c5']

// GET one
server.get('/cursos/:index',(req,res)=>{
    const{index} = req.params;
    return res.json(cursos[index]);
});

// GET all
server.get ('/cursos',(req,res)=>{
    return res.json(cursos);
});

//POST create new
server.post('/cursos', (req,res)=>{
    const{name}=req.body;
    cursos.push(name);
    return res.json(cursos);
});

//PUT atulize
server.put('/cursos/:index',(req,res)=>{
    const{index}=req.params;
    const{name}=req.body;
    cursos[index]=name;
    return res.json(cursos);
});

//Delete
server.delete('/cursos/:index',(req,res)=>{
    const{index}=req.params;
    cursos.splice(index,1);
    return res.json({message:"SUMIU"});
})

server.listen(3000);
