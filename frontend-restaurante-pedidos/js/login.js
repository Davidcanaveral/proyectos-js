const d = document;
userInput = d.querySelector('#user');
userPassword = d.querySelector('#password');
btnLogin= d.querySelector('.btn-iniciar');

btnLogin.addEventListener('click', ()=>{
    let data = getData();
    sendData(data);
});

let getData = () =>{
    let user;
    if(userInput.value && userPassword.value){
        user = {
            user: userInput.value,
            password: userPassword.value
        }
        userInput.value = '';
        userPassword.value = '';
    }else{
        Swal.fire({
            title: "X_X",
            text: "Usuario y contraseña oblibatorios",
            icon: "error"
          });
    }

    return user;
}

async function sendData(data){
    let URL = 'http://localhost:3005/login';
    try {
        let answer = await fetch(URL,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        let userLogin = await answer.json();
        if(answer.status === 401){
            Swal.fire({
                title: "Datos Incorrectos",
                text: "Usuario o contraseña incorrectos",
                icon: "error"
              });
            return;
        }
        localStorage.setItem('userLogin', JSON.stringify(userLogin));
        Swal.fire({
            title: "Bienvenido",
            text: `Accediste como ${userLogin.user.user}` ,
            icon: "success"
          });
        switch (userLogin.user.rol){
         case 'chef':
            location.href = "../chef.html";
            break;
         case 'cajero':   
            location.href = "../cajero.html";
            break;
         case 'mesero':   
            location.href = "../mesero.html";
            break;   
         default:
            Swal.fire({
                title: "no se encontro el usuario",
                text: "X_X",
                icon: "error"
              });
        }
    } catch (error) {
        console.log(error);
    }
}