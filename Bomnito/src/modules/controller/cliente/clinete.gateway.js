const { query } = require('../../../utils/mysql');  //manualmente llamara funconaes na cpm ññabe


//Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago.
const find1 = async() =>{
    const sql = `SELECT c.codigo_cliente, c.nombre_cliente FROM cliente c LEFT JOIN pago p ON c.codigo_cliente = p.codigo_cliente WHERE p.codigo_cliente IS NULL;    `;
    return await query(sql, []);
};

//Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido.
const find2 = async() =>{
    const sql = `SELECT c.codigo_cliente, c.nombre_cliente FROM cliente c LEFT JOIN pedido p ON c.codigo_cliente = p.codigo_cliente WHERE p.codigo_pedido IS NULL;    `;
    return await query(sql, []);
};

//Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido.
const find3 = async() =>{
    const sql = `SELECT c.codigo_cliente, c.nombre_cliente FROM cliente c LEFT JOIN pedido p ON c.codigo_cliente = p.codigo_cliente LEFT JOIN pago pa ON c.codigo_cliente = pa.codigo_cliente WHERE p.codigo_pedido IS NULL AND pa.codigo_cliente IS NULL;    `;
    return await query(sql, []);
};

//¿Cuántos clientes tiene cada país?
const find4 = async() =>{
    const sql = `SELECT pais, COUNT(*) as cantidad_clientes FROM cliente GROUP BY pais;`;
    return await query(sql, []);
};

//Devuelve el nombre del cliente con mayor límite de crédito.
const find5 = async() =>{
    const sql = `SELECT nombre_cliente FROM cliente ORDER BY limite_credito DESC LIMIT 1;`;
    return await query(sql, []);
};
module.exports = {
    find1,
    find2,
    find3,
    find4,
    find5
};