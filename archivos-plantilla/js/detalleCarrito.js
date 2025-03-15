let tablacarrito = document.querySelector('.cart-table');

document.addEventListener('DOMContentLoaded',()=>{
    loadProd();
} );

function loadProd(){
    let allProd = [];
    let prevProd = JSON.parse(localStorage.getItem('pro-cart'));
    if(prevProd !==null){
        allProd = Object.values(prevProd);
    }

    tablacarrito.innerHTML = ""; 
    if(allProd.length !== 0){
        allProd.forEach((product, i)=>{
            let row= document.createElement('tr');
            row.innerHTML =`
            <td class="d-flex justify-content-start align-items-center">
            <span onclick="deleteFromCart()" class="btn btn-danger"> ❌ </span>
            <img src="${product.ImgProd}" width="70px">
            ${product.Nombre}</td>
            <td> $${product.PrecioProd}</td>
            <td> 
                <div class="quantity quantity-wrap">
                    <div class="decrement" onclick="updateCant(${i},-1)"> <i class="fa-solid fa-minus"></i></div>
                    <input class="text" type="number" name="quantity" value="${product.cantidad  || 1}" maxlength="2" size="1" readonly>
                    <div class="increment" onclick="updateCant(${i},1)"><i class="fa-solid fa-plus"></i></div>
                </div>    
            </td>
             <td> $${(Number(product.cantidad))*((product.PrecioProd))}</td>    
            `;
            tablacarrito.appendChild(row);
        });
    }else{
        let row= document.createElement('tr');
        row.innerHTML = `
         <td colspan="4"> 
                <p class= "text-center fs-3"> No hay Productos en el Carrito </p>
         </td>
        `;
        tablacarrito.appendChild(row)  
    }
}

function updateCant( pos,cambio){
    let allProd = [];
    let prevProd = JSON.parse(localStorage.getItem('pro-cart'));
    if(prevProd !==null){
        allProd = Object.values(prevProd);
    }
    if(allProd[pos]){
        allProd[pos].cantidad = (allProd[pos].cantidad  || 1) + cambio; 

        if(allProd[pos].cantidad < 1){
            allProd[pos].cantidad =1 ;
        }
    }
    localStorage.setItem('pro-cart', JSON.stringify(allProd));

    loadProd(); 
} 