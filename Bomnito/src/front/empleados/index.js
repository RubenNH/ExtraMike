fetch("http://localhost:3000/api/empleado/cuatro/")
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
            <td>${sala.codigo_empleado}</td>
            <td>${sala.nombre}</td>
            <td>${sala.apellido1}</td>
            <td>${sala.apellido2}</td>
            </tr>
            `;
        });
    }
    
};

fetch("http://localhost:3000/api/empleado/cinco/")
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
        <td>${sala.codigo_empleado}</td>
        <td>${sala.nombre}</td>
        <td>${sala.apellido1}</td>
        <td>${sala.apellido2}</td>
        </tr>
        `;
    });
};
