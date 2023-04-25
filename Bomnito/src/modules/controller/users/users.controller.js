const { Response, Router } = require('express');
const { validateError } = require('../../../utils/functions');
const { findAll, findById, deletedById, saveOne} = require('./users.gateway');

const getAll = async(req, res=Response) =>{
    try{
        const user = await findAll();
        res.status(200).json({user});
    }catch(error){
        console.log(error);
        const massage = validateError(error);
        res.status(400).json({massage});
    }
}

const getOneById = async(req, res=Response) =>{
    try{
        const { id } = req.params;
        const user = await findById(id);
        res.status(200).json({user});
    }catch(error){
        console.log(error);
        const massage = validateError(error);
        res.status(400).json({massage});
    }
}

const deleteOne = async(req, res=Response) =>{
    try{
        const { id } = req.params;
        const users = await deletedById(id);
        res.status(200).json({users});
    }catch(error){
        console.log(error);
        const massage = validateError(error);
        res.status(400).json({massage});
    }
}

const save = async(req, res=Response) =>{
    try{
        const {email,password,role} =req.body;
        const personal = await saveOne({email,password,role,status});
        res.status(200).json({personal});
    }catch(error){
        console.log(error);
        const massage = validateError(error);
        res.status(400).json({massage});
    }
}

const update = async(req, res=Response) =>{
    try{
        const {name,lastname,birthday,salary} =req.body;
        const { id } = req.params;
        const personal = await updateOne({name,lastname,birthday,salary}, id);
        res.status(200).json({personal});
    }catch(error){
        console.log(error);
        const massage = validateError(error);
        res.status(400).json({massage});
    }
}


const userRoute = Router();

userRoute.get('/', getAll);

userRoute.get('/:id', getOneById);

userRoute.delete('/:id', deleteOne);

userRoute.post('/', save);


module.exports = {
    userRoute
}