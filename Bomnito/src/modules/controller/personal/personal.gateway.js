const { query } = require('../../../utils/mysql');  //manualmente llamara funconaes na cpm ññabe

const findAll = async() =>{
    const sql = `SELECT pe.*, po.description 
    FROM personal pe join position po on po.id = pe.position_id`;
    return await query(sql, []);
};

const findById = async(id) =>{
    if(Number.isNaN(id)) throw Error("Wrong type");
    if(!id) throw Error("Missing field");

    const sql = `SELECT pe.*, po.description 
    FROM personal pe join position po on po.id = pe.position_id where pe.id = ?`;
    return await query(sql, [id]);
};

const deletedById = async(id) =>{
    if(Number.isNaN(id)) throw Error("Wrong type");
    if(!id) throw Error("Missing field");

    const sql = `Delete FROM personal pe where pe.id = ?`;
    await query(sql, [id]);
    return {idDeleted:id}
};

const saveOne = async(person) =>{
    if(Number.isNaN(person.position.id)) throw Error("Wrong type");
    if(!person.name || !person.lastname || !person.birthday || !person.salary || !person.position.id) throw Error("Missing field");

    const sql = `INSERT INTO personal (name, lastname, birthday, salary, position_id) VALUES (?,?,?,?,?)`;
    const { insertedId } = await query(sql, [
        person.name, 
        person.lastname, 
        person.birthday,
        person.salary,
        person.position.id
    ])
    return { ...person, id:insertedId};

};

const updateOne = async(person, id) =>{
    if(Number.isNaN(id)) throw Error("Wrong type");
    if(!person.name || !person.lastname || !person.birthday || !person.salary) throw Error("Missing field");

    const sql = `UPDATE personal SET name=?, lastname=?, birthday=?, salary=? WHERE id=?`;
    await query(sql, [
        person.name, 
        person.lastname, 
        person.birthday,
        person.salary,
        id
    ])
    return { ...person, id:id};

};

module.exports = {
    findAll,
    findById,
    updateOne,
    deletedById,
    saveOne
};