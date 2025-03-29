const d = document;
let clienteInput;
let plateSelect;
let cantidadInput;
let dateInput; 
let commentsInput;
let botonPedir; 

d.addEventListener('click',(e)=>{
    if (e.target.classList.contains('btn-pedido')) { 
        let formulario = e.target.closest('form');
        let menuContainer = formulario.closest('.menu');

        clienteInput = formulario.querySelector('.cliente').value;
        plateSelect = formulario.querySelector('.platillo').value;
        let precioElemento = menuContainer.querySelector('.precios');
        let precio = precioElemento ? precioElemento.textContent.trim() : "Precio no encontrado";
        precio = parseFloat(precio.replace(/[\$.]/g, ''), 10);
        cantidadInput = Number(formulario.querySelector('.cantidad').value);
        dateInput = formulario.querySelector('.fecha').value;
        dateInput = new Date(dateInput).toISOString()
        commentsInput = formulario.querySelector('.observaciones').value;
       
        if(cantidadInput && plateSelect && clienteInput && dateInput){
            let pedido ={
                "platillo": plateSelect,
                "precio": precio,
                "mesa": 0,
                "cantidad": cantidadInput,
                "observaciones": commentsInput,
                "cliente":clienteInput,
                "fecha": dateInput
            }
    
            hacerPedido(pedido);
        }else{
            Swal.fire({
                title: "Faltan campos por llenar",
                text: "Debes rellenar todos los campos X_X",
                icon: "error"
              });
        }
    }
});

let hacerPedido = async(obj)=>{
    let URL = 'http://localhost:3005/pedido';
    try {
        let answer = await fetch(URL,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        });
        let respuestaPedido = await answer.json();
        if(answer.status === 401){
            alert('Intentalo de nuevo🫤');
            return;
        }
        Swal.fire({
            title: "Pedido Enviado",
            text: respuestaPedido.message,
            icon: "success"
          });
    } catch (error) {
        console.log(error);
    }
}