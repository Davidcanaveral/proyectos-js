//  local storage y session storage local es permanente y session es temporal 
//  metodos => setItem()
// getItem()
// removeItem()
// clear()
// keys()
// length() 
// se usa junto con JSon con los metodos parse() y stringify()
const d = document;
let nombreProd = d.querySelector('#nombreProd');
let precioProd = d.querySelector('#precioProd');
let descripcion = d.querySelector('#Descrip');
let imagenProd = d.querySelector('#ImagenProd');
let btGuardar = d.querySelector('.btnGuardar');
let tabla =d.querySelector('.table > tbody');

btGuardar.addEventListener('click', ()=>{
    // alert(nombreProd.value);
    validateData();
    showData();
});

d.addEventListener('DOMContentLoaded', ()=>{
    showData();
});

function validateData(){
    let producto;
    if(nombreProd.value && precioProd.value && descripcion.value && imagenProd.value){
       
        producto = {
        nombre: nombreProd.value,
        precio: precioProd.value,
        descripcion: descripcion.value,
        imagen: imagenProd.value
       }
       saveData( producto);
    }else{
        alert('☢ Necesitas llenar todos los campos ☢ 😥');
    }

    nombreProd.value='';
    precioProd.value='';
    descripcion.value='';
    imagenProd.value='';

}
let producto =[];
function saveData(obj){
    let productosPrevios = JSON.parse(localStorage.getItem("productos"));
    if(productosPrevios !== null){
        productosPrevios = Object.keys(producto); 
    }
    producto.push(obj);
    // JSON.parse(obj);
    localStorage.setItem("productos", JSON.stringify(producto));
    alert('Productso Guardados con exito 👍');
}

function showData(){
    let producto = JSON.parse(localStorage.getItem("productos")) || [];
    producto.forEach((prod, i) => {
        let fila = d.createElement('tr');
        fila.innerHTML = `
            <td>${(i+1)}</td>
            <td>${(prod.nombre)}</td>
            <td>${(prod.precio)}</td>
            <td>${(prod.descripcion)}</td>
            <td>
                <img src="${(prod.imagen)}" width="30%">
            </td>
            <td> <button type="button" class="btn btn-primary col-12">Editar</button> <button type="button" class="btn btn-danger col-12 mt-2">Borrar</button> </td>
            `;
            tabla.appendChild(fila);
    });
}

function edit(){
    let producto = JSON.parse(localStorage.getItem("productos")) || [];
}

