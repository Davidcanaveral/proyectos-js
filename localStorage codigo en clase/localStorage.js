//variables globales
const d = document;
let nombrePro = d.querySelector("#nombrePro");
let precioPro = d.querySelector("#precioPro");
let imagenPro = d.querySelector("#imagenPro");
let descripcionPro = d.querySelector("#descripcionPro");
let btnGuardar = d.querySelector(".btnGuardar");
let tabla = d.querySelector(".table > tbody");

//validar datos del formulario
btnGuardar.addEventListener("click", ()=>{
    ValidarDatos();
    mostrarDatos();
});
//evento para detectar cuando se recargue la pagina
d.addEventListener("DOMContentLoaded", ()=>{
    mostrarDatos();
});

function ValidarDatos() {
    let producto;
    if ( nombrePro.value && precioPro.value && descripcionPro.value && imagenPro.value ) {
       producto = {
        nombre : nombrePro.value,
        precio : precioPro.value,
        imagen : imagenPro.value,
        descripcion : descripcionPro.value
       }
       //llamar funcion guardarDatos
        guardarDatos( producto );
    }else{
        alert("Todos los campos son Obligatorios");
    }
    //borrar datos del formulario
    nombrePro.value = "";
    precioPro.value = "";
    imagenPro.value = "";
    descripcionPro.value = "";
    //mostar datos en consola
    console.log(producto);
    
}

//funcion para guardar datos en localStorage
function guardarDatos( pro ) {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.push( pro );
    //guardar producto en localStorage
    localStorage.setItem("productos", JSON.stringify(productos) );
    alert("productos guardados con exito");
}

//funcion para mostrar los datos guardados en localStorage
function mostrarDatos() {
    tabla.innerHTML = "";
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.forEach((producto, i)=>{
        let fila = d.createElement("tr");
        fila.innerHTML = `
            <td>${i+1}</td>
            <td>${ producto.nombre }</td>
            <td>${ producto.precio }</td>
            <td>${ producto.descripcion }</td>
            <td>
               <img src="${ producto.imagen }" width="10%">
            </td>
            <td>
               <button type="button" class="btn btn-danger btnBorrar">Borrar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });

    document.querySelectorAll(".btnBorrar").forEach((boton) => {
        boton.addEventListener("click", (event) => {
            let fila = event.target.closest("tr");
            let nombreProducto = fila.querySelector("td:nth-child(2)").textContent.trim();
            deleteRow(nombreProducto);
        });
    });
}

function exportarPDF(){
    const jsPDF= window.jspdf.jsPDF;
    const doc = new jsPDF();

    doc.text("Lista de Productos", 10,10);

    doc.autoTable({ 
        html: '#tableID', 
        startY: 20 
    });

    doc.save("tabla_productos.pdf");
}

function deleteRow(nombre) {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos = productos.filter((item) => item.nombre !== nombre);
    localStorage.setItem("productos", JSON.stringify(productos));

    tabla.innerHTML = "";
    mostrarDatos();
}

document.querySelector("#miInput").addEventListener("input", function() {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    let look = document.getElementById('miInput').value.trim();

    if (look) {
        productos = productos.filter((item) => item.nombre.toLowerCase().includes(look.toLowerCase())); // Búsqueda sin importar mayúsculas/minúsculas
    } 

    // Limpiar tabla antes de mostrar resultados
    tabla.innerHTML = "";

    productos.forEach((producto, i) => {
        let fila = d.createElement("tr");
        fila.innerHTML = `
            <td>${i + 1}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.descripcion}</td>
            <td>
                <img src="${producto.imagen}" width="10%">
            </td>
            <td>
                <button type="button" class="btn btn-danger btnBorrar">Borrar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });

    // Asignar eventos a los botones de borrar dentro de los resultados
    document.querySelectorAll(".btnBorrar").forEach((boton) => {
        boton.addEventListener("click", (event) => {
            let fila = event.target.closest("tr");
            let nombreProducto = fila.querySelector("td:nth-child(2)").textContent.trim();
            deleteRow(nombreProducto);
        });
    });
});
