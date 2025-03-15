const tarea = document.getElementById('inputName');
const button = document.getElementById('botonCreate');
const listaTarea = document.getElementById('Lista__Resultado');

let SBD = JSON.parse(localStorage.getItem('tareas')) || [];

function saveinLocalstorage() {
    localStorage.setItem('tareas', JSON.stringify(SBD));
}

function generateTask() {
    listaTarea.innerHTML = '';
    SBD.forEach(element => {
        addTask(element);
    });
}

function addTask(taskObj) {
    let task = document.createElement('div');
    task.classList.add('task');

    if (taskObj.completada) {
        task.classList.add('Completada');
    }

    let texto = document.createElement('p');
    texto.innerText = taskObj.nombre;
    texto.classList.add('Titulo');
    task.appendChild(texto);

    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    task.appendChild(iconos);

    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', () => tacharTask(task, taskObj));

    let edit = document.createElement('i');
    edit.classList.add('bi', 'bi-pen', 'icono-edit');
    edit.addEventListener('click', () => editTask(task, texto, taskObj));

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3', 'icono-delete');
    eliminar.addEventListener('click', () => deleteTask(task, taskObj));

    iconos.append(completar, edit, eliminar);
    task.appendChild(iconos);
    listaTarea.appendChild(task);
}

function makeATask() {
    if (tarea.value.trim()) {
        let nuevaTarea = { nombre: tarea.value.trim(), completada: false };
        SBD.push(nuevaTarea);
        saveinLocalstorage();
        addTask(nuevaTarea);
        tarea.value = '';
    } else {
        alert('Debe agregar un nombre de tarea');
    }
}

function tacharTask(task, taskObj) {
    task.classList.toggle('Completada');
    taskObj.completada = !taskObj.completada;
    saveinLocalstorage();
}

function deleteTask(task, taskObj) {
    task.remove();
    SBD = SBD.filter(t => t.nombre !== taskObj.nombre);
    saveinLocalstorage();
}

function editTask(task, texto, taskObj) {
    let nuevoNombre = prompt('Nuevo Nombre de tarea', texto.innerText);
    if (nuevoNombre && nuevoNombre.trim()) {
        let index = SBD.findIndex(t => t.nombre === taskObj.nombre);
        if (index !== -1) {
            SBD[index].nombre = nuevoNombre.trim();
            saveinLocalstorage();
            texto.innerText = nuevoNombre.trim();
        }
    }
}

button.addEventListener('click', makeATask);

tarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        makeATask();
        e.preventDefault();
    }
});

generateTask();
