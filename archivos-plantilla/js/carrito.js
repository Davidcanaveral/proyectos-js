// Variables
let btnProd = document.querySelectorAll('.btn-product');
let contadorCarr = document.querySelector('.contar-pro');
let carList = document.querySelector('.list-cart tbody');
let allProd = [];

// Cargar carrito al inicio
document.addEventListener('DOMContentLoaded', loadData);

// Evento para agregar productos
btnProd.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        infoProd(i);
    });
});

function agregarProd(product, index) {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td class="product-index">${index + 1}</td>
        <td><img src="${product.ImgProd}" width="70px"></td>
        <td>${product.Nombre}</td>
        <td> $${product.PrecioProd}</td>
        <td><span onclick="deleteFromCart(${index})" class="btn btn-danger"> X </span></td>
    `;
    carList.appendChild(row);
}

function infoProd(pos){
    let producto = btnProd[pos].parentElement.parentElement.parentElement; 
    let infoProduct = {
        'Nombre': producto.querySelector('h3').textContent,
        'ImgProd': producto.querySelector('img').src,
        'PrecioProd': producto.querySelector('h5').textContent.split('$')[1],
        'cantidad' : 1
    };
    saveProd(infoProduct);
}

function deleteFromCart(pos){
    allProd.splice(pos, 1); 
    localStorage.setItem('pro-cart', JSON.stringify(allProd)); 
    loadCart(); 
}

function saveProd(prod){
    allProd = JSON.parse(localStorage.getItem('pro-cart')) || [];
    allProd.push(prod);
    localStorage.setItem('pro-cart', JSON.stringify(allProd));
    loadCart(); 
}

function loadCart(){
    carList.innerHTML = ''; // Vaciar la tabla antes de repoblarla
    allProd = JSON.parse(localStorage.getItem('pro-cart')) || [];
    
    allProd.forEach((prod, index) => agregarProd(prod, index));

    contadorCarr.textContent = allProd.length; // Actualizar contador
}

function loadData(){
    allProd = JSON.parse(localStorage.getItem('pro-cart')) || [];
    loadCart();
}

contadorCarr.parentElement.addEventListener('click', ()=>{
    carList.parentElement.classList.toggle('ocultar');
});
