const d = document;

let tablePro = d.querySelector('#idTablePro > tbody');
let searchInput = d .querySelector('#search-input');

searchInput.addEventListener('keyup',()=>{
    console.log(searchInput.value);
});

document.addEventListener('DOMContentLoaded',()=>{
    getDataTable();
})

let getDataTable = async ()=>{
    let url = 'http://localhost/backend-apiCrud-20250318T005930Z-001/backend-apiCrud/productos';
    try {
        let respuesta = await fetch(url,{
            method: "GET",//metodo a usar 
            headers:{
                "Content-Type": "application/json"
            },
        });
        if(respuesta.status === 401){
            alert('no hay datos en la bd');
        }else{
            let tableData = await respuesta.json();
            console.log(tableData);
            tableData.forEach((dato, i) => {
                let row = document.createElement('tr');
                row.innerHTML = `
                    <td> ${i+1} </td>
                    <td> ${dato.nombre} </td>
                    <td> ${dato.descripcion} </td>
                    <td> ${dato.precio} </td>
                    <td> ${dato.stock} </td>
                    <td> <img src="${dato.imagen}" width="100px"> </td>
                    <td> <button id="btn-edit" onclick="editDataTable(${i})" type="button" class="btn btn-primary">Editar</button> <button id="btn-edit" onclick="deleteDataTable(${i})" type="button" class="btn btn-danger">Eliminar</button>  </td>
                    `;
                    tablePro.appendChild(row);
            });
        }
    } catch (error) {
        console.log(error);
    }
};


let editDataTable = (pos) =>{

};

let deleteDataTable = (pos) =>{

};