fetch("http://localhost:3000/api/empleado/seis/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        
        obtenerUno(data);
    })
    .catch((error) => {
        console.log(error);
    });

const obtenerUno = (salas) => {
    const contenido = document.getElementById("contenidoUno");

    if (salas.length === 0) {
        contenido.innerHTML = `
        <tr>
            <td colspan="4">empty</td>
        </tr>
        `;
    }else{
        salas.forEach((sala) => {
            contenido.innerHTML = `
            ${contenido.innerHTML}
            <tr>
            <td>${sala.conteo}</td>
            </tr>
            `;
        });
    }
    
};

fetch("http://localhost:3000/api/cliente/siete/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        obtenerDos(data);
    })
    .catch((error) => {
        console.log(error);
    });

const obtenerDos = (salas) => {
    const contenido = document.getElementById("contenidoDos");
    salas.forEach((sala) => {
        contenido.innerHTML = `
        ${contenido.innerHTML}
        <tr>
        <td>${sala.pais}</td>
        <td>${sala.cantidad_clientes}</td>
        </tr>
        `;
    });
};

fetch("http://localhost:3000/api/empleado/ocho/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        obtenerTres(data);
    })
    .catch((error) => {
        console.log(error);
    });

const obtenerTres = (salas) => {
    const contenido = document.getElementById("contenidoTres");
    salas.forEach((sala) => {
        contenido.innerHTML = `
        ${contenido.innerHTML}
        <tr>
        <td>${sala.pago_medio_2009}</td>
        </tr>
        `;
    });
};

fetch("http://localhost:3000/api/empleado/nueve/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        obtenerCuatro(data);
    })
    .catch((error) => {
        console.log(error);
    });

const obtenerCuatro = (salas) => {
    const contenido = document.getElementById("contenidoCuatro");
    salas.forEach((sala) => {
        contenido.innerHTML = `
        ${contenido.innerHTML}
        <tr>
        <td>${sala.estado}</td>
        <td>${sala.cantidad_pedidos}</td>
        </tr>
        `;
    });
};

fetch("http://localhost:3000/api/cliente/diez/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        obtenerCinco(data);
    })
    .catch((error) => {
        console.log(error);
    });

const obtenerCinco = (salas) => {
    const contenido = document.getElementById("contenidoCinco");
    salas.forEach((sala) => {
        contenido.innerHTML = `
        ${contenido.innerHTML}
        <tr>
        <td>${sala.nombre_cliente}</td>
        </tr>
        `;
    });
};