//variables globales del form login 
const d = document;
userInput = d.querySelector("#userId");
passUser = d.querySelector("#PasswordForm");
btnLogin = d.querySelector(".btnLogin");

btnLogin.addEventListener("click", ()=>{
  let dataForm = getData();
    setData(dataForm);
});


let getData = () => {
    let user ;
    if(userInput.value && passUser.value){
        user = {
            usuario: userInput.value,
            contrasena: passUser.value
        }
        userInput.value = '';
        passUser.value ='';

    }else{
        alert('usuraio y contraseña obligatorio..')
    }
    //depuración 
    console.log(user);
    return user; 
};

//peticion 

let setData = async (data)=>{
    let URL = "http://localhost/backend-apiCrud-20250318T005930Z-001/backend-apiCrud/login";
    try {
        let respuesta = await fetch(URL,{
            method: "POST",//metodo a usar 
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)//contenido en formato json
        });
        let userLogin = await respuesta.json();
        if(respuesta.status === 401){
            alert('El usuario o la contraseña es incorrecto');
            return;
        }
        localStorage.setItem('userLogin', JSON.stringify(userLogin));
        alert(`Bienvenido ${userLogin.nombre}`);
        location.href = "../index.html";
    } catch (error) {
        console.log(error);
    }
    
};