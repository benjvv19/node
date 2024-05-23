const express = require("express");
const app = express();
const port = 3001;


const {robots} = require ("./robots");

const { 
    getRobots, 
    getRobotsByid } = require("./controllerrs/getRobots");

/*
app.get("/",(req , res)=>{


    res.json({
        robots:robots
    });


})
*/
app.get("/",getRobots);

app.get("/:id",getRobotsByid);

app.listen(port,()=>{
    console.log(`Conectado ok en el puerto: ${port}`);
})