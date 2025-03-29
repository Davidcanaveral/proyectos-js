const d = document;
let nameInput = d.querySelector('#productos-select');
let priceInput = d.querySelector('#precio-pro'); 
let stock = d.querySelector('#stock-pro'); 
let descripInput = d.querySelector('#des-pro');
let btnCreate = d.querySelector('.btn-create');
let img = d.querySelector('#imagen-pro');

btnCreate.addEventListener('click', ()=>{
    let productsData =getDataProduct();
    setDataProduct(productsData);
});


let getDataProduct = () => {
    let product;
    if(nameInput.value && priceInput.value && stock.value && descripInput.value && img.src){
        product = {
           nombre: nameInput.value,
           descripcion: descripInput.value,
           precio: priceInput.value,
           stock: stock.value,
           imagen: img.src
        }
        nameInput.value="";
        descripInput.value="";
        stock.value="";

    }else{
        alert('todos los campos son obligatorios');
    }
    //depuración 
    console.log(product);
    return product; 
};

let setDataProduct = async (data)=>{
    let URL = "http://localhost/backend-apiCrud-20250318T005930Z-001/backend-apiCrud/productos";
    try {
        let respuesta = await fetch(URL,{
            method: "POST",//metodo a usar 
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)//contenido en formato json
        });
        if(respuesta.status === 406 ){
            alert('Los datos enviados no son admitidos');
        }else{
            let newProducto = await respuesta.json();
            alert(newProducto.message);
        }
       
    } catch (error) {
        console.log(error);
    }
    
};