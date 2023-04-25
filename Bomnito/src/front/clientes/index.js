fetch("http://localhost:3000/api/cliente/uno/")
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
    salas.forEach((sala) => {
        contenido.innerHTML = `
        ${contenido.innerHTML}
        <tr>
        <td>${sala.codigo_cliente}</td>
        <td>${sala.nombre_cliente}</td>
        </tr>
        `;
    });
};

fetch("http://localhost:3000/api/cliente/dos/")
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
        <td>${sala.codigo_cliente}</td>
        <td>${sala.nombre_cliente}</td>
        </tr>
        `;
    });
};

fetch("http://localhost:3000/api/cliente/tres/")
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
        <td>${sala.codigo_cliente}</td>
        <td>${sala.nombre_cliente}</td>
        </tr>
        `;
    });
};