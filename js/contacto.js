//ajax/jason

/*const url = "http://jsonplaceholder.typicode.com/users";
const xhr = new XMLHttpRequest();
function manejador(){
    if(this.readyState === 4 && this.status === 200){
        const datos = JSON.parse(this.response);

    console.log(datos);
    mostrarUsuarios(datos);

    }}

    xhr.addEventListener("load", manejador);
xhr.open("GET", url);
xhr.send();
const app = document.getElementById("app");

function mostrarUsuarios(datos){
    datos.forEach(usuario =>{
        const li = document.createElement("li");
        li.textContent = `${usuario.id} - ${usuario.name} - ${usuario.email}`
        app.appendChild(li);
    })
}*/



/*const url = 'https://amazon-pricing-and-product-info.p.rapidapi.com/?asin=B07GR5MSKD&domain=de';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3f4dc58b97msh49aadf69242d988p13392bjsn29da95b9a537',
		'X-RapidAPI-Host': 'amazon-pricing-and-product-info.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/





// login
const BOTON_INICIARSESION = document.getElementById("botoniniciarsesion");

const usuarioAutorizado = "profe.tutor";
const passwordAutorizado = "profe.tutor.1234";

BOTON_INICIARSESION.addEventListener("click", ()=>{
    Swal.fire({
        title:"iniciar sesion",
        html:`
        <input type="text" id="usuario" class="swal2-input" placeholder="ingresa tu usuario">
        <input type="text" id="password" class="swal2-input" placeholder="ingresa tu contraseña">
        `,
        confirmButtonText:"enviar",
        showCancelButton: true,
        cancelButtonText: "cancelar"
    }).then((result)=>{
        if(result.isConfirmed){
            const usuario= document.getElementById("usuario").value;
            const password= document.getElementById("password").value;
            if(usuario === usuarioAutorizado && password === passwordAutorizado){
                window.location.href="productos.html";
        }
    }
    })
})

//INICIAR SESION 2
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('loginButton').addEventListener('click', login);
})

function login(){
    let userName = document.getElementById('userName').value;
    let userEmail = document.getElementById('userEmail').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if(userName && password){
        localStorage.setItem('UserName', userName);
        localStorage.setItem('userEmail', userEmail);
        localStorage.setItem('password', password);
        localStorage.setItem('confirmPassword', confirmPassword);
 
        window.location.href = 'productos.html';
    }else{
        alert('Los datos son incorrectos, por favor intenta nuevamente.')
    }
}