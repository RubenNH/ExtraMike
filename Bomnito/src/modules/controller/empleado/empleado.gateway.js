const { query } = require('../../../utils/mysql');  //manualmente llamara funconaes na cpm ññabe

//Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.
const find1 = async() =>{
    const sql = `SELECT e.codigo_empleado, e.nombre, e.apellido1, e.apellido2 FROM empleado e LEFT JOIN oficina o ON e.codigo_oficina = o.codigo_oficina WHERE o.codigo_oficina IS NULL;`;
    return await query(sql, []);
};

//Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.
const find2 = async() =>{
    const sql = `SELECT e.codigo_empleado, e.nombre, e.apellido1, e.apellido2 FROM empleado e LEFT JOIN cliente c ON e.codigo_empleado = c.codigo_empleado_rep_ventas WHERE c.codigo_empleado_rep_ventas IS NULL;`;
    return await query(sql, []);
};

//¿Cuántos empleados hay en la compañía?
const find3 = async() =>{
    const sql = `SELECT COUNT(*) as conteo FROM empleado;`;
    return await query(sql, []);
};

//¿Cuál fue el pago medio en 2009?
const find4 = async() =>{
    const sql = `SELECT AVG(total) as pago_medio_2009 FROM pago WHERE fecha_pago BETWEEN '2009-01-01' AND '2009-12-31';`;
    return await query(sql, []);
};

//¿Cuántos pedidos hay en cada estado? Ordena el resultado de forma descendente por el número de pedidos.
const find5 = async() =>{
    const sql = `SELECT estado, COUNT(*) as cantidad_pedidos FROM pedido GROUP BY estado ORDER BY cantidad_pedidos DESC;`;
    return await query(sql, []);
};

module.exports = {
    find1,
    find2,
    find3,
    find4,
    find5
};