const d = document;
let tabla = d.querySelector('.tablePrep > tbody');
let tabla2 = d.querySelector('.tableEntr > tbody');

d.addEventListener('DOMContentLoaded', async () => {
    let data = await getData();  // ✅ Esperar los datos antes de usarlos
    if (data) {
        showDataPendiente(data);
        showDataEntr(data);
    }
});

let getData = async () => {
    let URL = 'http://localhost:3005/chef';
    try {
        let answer = await fetch(URL, {
            method: 'GET'
        });
        let respuestaPedido = await answer.json();
        if (answer.status === 401) {
            alert('Inténtalo de nuevo 🫤');
            return null;
        }

        return respuestaPedido; // ✅ Devolver los datos correctamente

    } catch (error) {
        console.log(error);
        return null;
    }
};

function showDataPendiente(obj) {
    tabla.innerHTML = "";
    console.log(obj.data.porPreparar);

    obj.data.porPreparar.forEach((item) => {
        let fila = d.createElement('tr');
        fila.innerHTML = `
        <td>${item.platillo}</td>
        <td>${item.mesa}</td>
        <td><button type="button" class="btn btn-warning btnCambiarPend">${item.estado}</button></td>
        `;
        tabla.appendChild(fila);
    });
    d.querySelectorAll('.btnCambiarPend').forEach((boton) => {
        boton.addEventListener('click', (event) =>{
            cambiarEstado();
        });
    });
}

function showDataEntr(obj) {
    tabla2.innerHTML = "";
    console.log(obj.data.preparando);

    obj.data.preparando.forEach((item) => {
        let fila = d.createElement('tr');
        fila.innerHTML = `
        <td>${item.platillo}</td>
        <td>${item.mesa}</td>
        <td><button type="button" class="btn btn-danger btnCambiarEntr>${item.estado}</button></td>
        `;
        tabla2.appendChild(fila);
    });
}
