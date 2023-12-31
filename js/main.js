const TITULO = document.getElementById("tituloPrincipal");
console.log(TITULO)

let parrafo = document.createElement("p");
parrafo.textContent = "Could I have more t-shirt? "
document.body.appendChild(parrafo);

let etiqueta = document.getElementsByTagName("li");
console.log(etiqueta);

//INICIO - NOMBRE + APELLIDO + EDAD DEL USUARIO 
let nombreUsuario = prompt("Ingresa tu nombre para comenzar el Quizz y obtener un 20% off en nuestros productos!");
console.log(nombreUsuario);

let edadUsuario = parseInt(prompt(`Hola ${nombreUsuario}! ¿Cuántos años tenes?`));

if (edadUsuario >= 15) {
    alert(`¡Bienvenid@ ${nombreUsuario}! ¡Vamos a ver cuánto sabes de Friends!`);
} else {
    alert("Aún no tienes edad suficiente para ingresar a la página.");
}

//BOTON ENCUESTA



function hacerEncuesta(){
    const hacerquizz = document.getElementById("hacerQuizz");
    hacerquizz.addEventListener("click", () => {
        hacerPregunta("¿Qué animales tienen Joey y Chandler como mascotas? Responde con a: Pato y Pollito o b: Mono y Gato", "a")
        hacerPregunta("¿Qué dice Phoebe cuando descubre que Chandler y Monica son pareja? a: Oh no! b: OH MY EYES! MY EYES!", "b");
        hacerPregunta("¿Qué festividad odia Chandler? a: Día de Acción de Gracias o b: San Valentín", "a");
        this.realizarCompra();
        
        alert("¡Gracias por visitar Oh no! Could I Have more T-shirts?!");
    
    })
}





//PREGUNTAS QUIZZ 
function hacerPregunta(pregunta, respuestaCorrecta) {
    let intentarOtraVez = "si";

    while (intentarOtraVez === "si") {
        const respuesta = prompt(pregunta);

        if (respuesta.toLowerCase() === respuestaCorrecta.toLowerCase()) {
            console.log("¡Muy bien! La siguiente pregunta es...");
            alert("¡Muy bien! La siguiente pregunta es...");
            intentarOtraVez = "no";
        } else {
            console.log("¡Oh no! ¿Quieres intentar otra vez si/no?");
            intentarOtraVez = prompt(`¡Oh no, ${nombreUsuario}! ¿Quieres intentar otra vez? si/no`).toLowerCase();
        }
    }
}

//FUNCION CON DESCUENTO 
function realizarCompra() {
    let intentarOtraVez = "si";

    while (intentarOtraVez === "si") {
        const opcion = prompt("Puedes elegir entre 1: Remera PIVOT; 2: REGINA FALANGE o 3: How u doin?");

        switch (opcion) {
            case "1":
                procesarCompra1("Remera PIVOT", 18000);
                intentarOtraVez = "no";
                break;
            case "2":
                procesarCompra2("REGINA FALANGE", 19500);
                intentarOtraVez = "no";
                break;
            case "3":
                procesarCompra3("How u doin?", 18500);
                intentarOtraVez = "no";
                break;
            default:
                console.log("Ninguna de las opciones anteriores es válida");
                break;
        }
    }
}

function procesarCompra1(producto, precio) {
    console.log(` Hi, Excelente elección! La ${producto} tiene un costo de $${precio}`);
    let valor = calculadoraConDescuento(precio, 20);
    alert(`Hi,Excelente elección! Ahora vas a poder cargar sillones por las escaleras y gritar PIVOT! La  ${producto} tiene un costo de $${precio}, con el descuento del 20% sería $${valor}`);

}
function procesarCompra2(producto, precio) {
    console.log(` Hi, Excelente elección! La ${producto} tiene un costo de $${precio}`);
    let valor = calculadoraConDescuento(precio, 20);
    alert(`Elegiste la opcion Regina Falange! Especial para falcificar tu identidad! La remera ${producto} tiene un costo de $${precio}, con el descuento del 20% sería $${valor}`);

}
function procesarCompra3(producto, precio) {
    console.log(` Hi, Excelente elección! La ${producto} tiene un costo de $${precio}`);
    let valor = calculadoraConDescuento(precio, 20);
    alert(`How u doin? Especial para invitar a chicas a salir! La remera ${producto} tiene un costo de $${precio}, con el descuento del 20% sería $${valor}`);

}

function calculadoraConDescuento(total, descuento) {
    let desc = (total * descuento) / 100;
    let totalConDes = total - desc;
    return totalConDes;
}

