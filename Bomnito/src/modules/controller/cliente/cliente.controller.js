const { Response, Router } = require('express');
const { validateError } = require('../../../utils/functions');
const { find1, find2, find3, find4, find5 } = require('./clinete.gateway');

const get1 = async(req, res=Response) =>{
    try{
        const user = await find1();
        res.status(200).json(user);
    }catch(error){
        console.log(error);
        const massage = validateError(error);
        res.status(400).json({massage});
    }
}

const get2 = async(req, res=Response) =>{
    try{
        const user = await find2();
        res.status(200).json(user);
    }catch(error){
        console.log(error);
        const massage = validateError(error);
        res.status(400).json({massage});
    }
}

const get3 = async(req, res=Response) =>{
    try{
        const user = await find3();
        res.status(200).json(user);
    }catch(error){
        console.log(error);
        const massage = validateError(error);
        res.status(400).json({massage});
    }
}

const get4 = async(req, res=Response) =>{
    try{
        const user = await find4();
        res.status(200).json(user);
    }catch(error){
        console.log(error);
        const massage = validateError(error);
        res.status(400).json({massage});
    }
}

const get5 = async(req, res=Response) =>{
    try{
        const user = await find5();
        res.status(200).json(user);
    }catch(error){
        console.log(error);
        const massage = validateError(error);
        res.status(400).json({massage});
    }
}

const cteRoute = Router();

cteRoute.get('/uno/', get1);
cteRoute.get('/dos/', get2);
cteRoute.get('/tres/', get3);
cteRoute.get('/siete/', get4);
cteRoute.get('/diez/', get5);


module.exports = {
    cteRoute
}