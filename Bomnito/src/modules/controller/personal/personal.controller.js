const { Response, Router } = require('express');
const { validateError } = require('../../../utils/functions');
const { findAll, findById, deletedById, saveOne, updateOne } = require('./personal.gateway');

const getAll = async(req, res=Response) =>{
    try{
        const personal = await findAll();
        res.status(200).json({personal});
    }catch(error){
        console.log(error);
        const massage = validateError(error);
        res.status(400).json({massage});
    }
}

const getOneById = async(req, res=Response) =>{
    try{
        const { id } = req.params;
        const personal = await findById(id);
        res.status(200).json({personal});
    }catch(error){
        console.log(error);
        const massage = validateError(error);
        res.status(400).json({massage});
    }
}

const deleteOne = async(req, res=Response) =>{
    try{
        const { id } = req.params;
        const personal = await deletedById(id);
        res.status(200).json({personal});
    }catch(error){
        console.log(error);
        const massage = validateError(error);
        res.status(400).json({massage});
    }
}

const save = async(req, res=Response) =>{
    try{
        const {name,lastname,birthday,salary,position} =req.body;
        const personal = await saveOne({name,lastname,birthday,salary,position});
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


const personalRouter = Router();

personalRouter.get('/', getAll);

personalRouter.get('/:id', getOneById);

personalRouter.delete('/:id', deleteOne);

personalRouter.post('/', save);

personalRouter.put('/:id', update);

module.exports = {
    personalRouter
}