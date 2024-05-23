



const {request , response} = require("express");
const { robots } = require ("../robots");

const getRobots =(req= request , res=response)=>{
    return res.json({
        robots:robots
    })
}



const getRobotsByid = (req= request , res=response)=>{
    const id = req.params.id;
}






module.exports={getRobots,getRobotsByid};