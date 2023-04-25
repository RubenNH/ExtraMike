const { query } = require('../../../utils/mysql');  //manualmente llamara funconaes na cpm ññabe

const findAll = async() =>{
    const sql = `SELECT * FROM users`;
    return await query(sql, []);
};

const findById = async(id) =>{
    if(Number.isNaN(id)) throw Error("Wrong type");
    if(!id) throw Error("Missing field");

    const sql = `SELECT * 
    FROM users where id = ?`;
    return await query(sql, [id]);
};

module.exports = {
    findAll,
    findById
};