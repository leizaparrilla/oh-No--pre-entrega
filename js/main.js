/*INICIO-NOMBRE + APELLIDO + EDAD DEL USUARIO */
let nombreUsuario = prompt("ingrese su Nombre para comenzar el Quizz y Obtener un 20% off en nuestros productos!");
console.log(nombreUsuario);
let edadUsuario = prompt("Hola" + " " + nombreUsuario + "!" + " " + "¿cuantos años tenes" + "?");
if (edadUsuario >= 15) {
    alert("Bienvenid@" + " " + nombreUsuario + "!" + " " + "Vamos a ver cuanto sabes de Friends!");
} else {
    alert("Aun no tienes edad suficiente para ingresar a la pagina")
}



/*PREGUNTAS QUIZZ */
let continuarQuizz = "no";
do {
    let intentarOtraVez = "si";
    while (intentarOtraVez === "si"){
        const pregunta1 = prompt("¿Que animales tienen Joey y Chandler como mascotas? responde con a: Pato y Pollito o b: Mono y Gato");

        switch(pregunta1.toLowerCase()){
        case "a":
                console.log(" Muy bien! la siguiente pregunta es sobre Phoebe!");
                alert("Muy bien! la siguiente pregunta es sobre Phoebe!");    
                intentarOtraVez = "no";
        break;
     case "b":
                console.log("oh no! ¿Queres intentar otra vez si/no?");
                intentarOtraVez = prompt("oh no! ¿Queres intentar otra vez? " + nombreUsuario + " " + "si/no").toLowerCase();
                break;
             default:
                console.log(" Ninguna de las opciones anteriores es valida");
                break;}
    }
    continuarQuizz = prompt("Estas listo para la siguiente pregunta?" +" " + nombreUsuario + " " + "si/no").toLowerCase();
} while (continuarQuizz === "no");
  


let continuarQuizz1 = "no";
do {
    let intentarOtraVez = "si";
    while (intentarOtraVez === "si"){
        const pregunta1 = prompt("¿Que dice Phoebe cuando descubre que Chandler y Monica son pareja? a: oh no! b: OH MY EYES! MY EYES!");

        switch(pregunta1.toLowerCase()){
        case "a":
            console.log("oh no! lo volvemos a intentar?");
            intentarOtraVez = prompt("oh no! lo volvemos a intentar??" +" " + nombreUsuario + " " + "si/no").toLowerCase();
            break;
        break;
     case "b":
        console.log("Muy bien!!! vamos con la ultima pregunta?");
                alert("Muy bien!!! vamos con la ultima pregunta? ");    
                intentarOtraVez = "no";
               
             default:
                console.log(" Ninguna de las opciones anteriores es valida");
                break;}
    }
    continuarQuizz1 = prompt("Estas listo para la ultima pregunta?" + nombreUsuario + " " + "si/no").toLowerCase();
} while (continuarQuizz1 === "no");


let continuarQuizz2 = "no";
do {
    let intentarOtraVez = "si";
    while (intentarOtraVez === "si"){
        const pregunta1 = prompt("¿Que festividad odia Chandler? a: Dia de Accion de Gracias o  b: San Valentin");

        switch(pregunta1.toLowerCase()){
        case "a":
                console.log(" Felicitaciones! ya tenes un 20% off en nuestros productos!");
                alert("Felicitaciones! ya tenes un 20% off en nuestros productos!");    
                intentarOtraVez = "no";
        break;
     case "b":
                console.log("oh no! ¿Queres intentar otra vez si/no?");
                intentarOtraVez = prompt("oh no! ¿Queres intentar otra vez? " + nombreUsuario + " " + "si/no").toLowerCase();
                break;
             default:
                console.log(" Ninguna de las opciones anteriores es valida");
                break;}
    }
    
} while (continuarQuizz === "no");


/*FUNCION CON DESCUENTO */
let remeras = "remeras";
do {
    let intentarOtraVez = "si";
    while (intentarOtraVez === "si") {
        const pregunta1 = prompt("Podes elegir entre 1: Remera PIVOT; 2: REGINA FALANGE o 3: How u doin?");

        switch (pregunta1.toLowerCase()) {
            case "1":
                console.log(" Hi! Excelente eleccion! la remera PIVOT tiene un costo de $6000");
                let valor = this.calculadoraConDescuento(6000, 20);
                alert("Hi! Excelente eleccion! la remera PIVOT tiene un costo de $6000 con el descuento del 20% seria  $" + valor)
                alert ("Gracias por visitar Oh no! Could I Have more T-shirts?! ")
                intentarOtraVez = "no";
                break;
            case "2":
                console.log(" Elegiste la opcion Regina Falange! Especial para falcificar tu identidad! Esta remera tiene un costo de $7000");
                let valor1 = this.calculadoraConDescuento(7000, 20);
                alert("Elegiste la opcion Regina Falange! Especial para falcificar tu identidad! Esta remera tiene un costo de $7000 con el 20% off seria  $" + valor1);
                alert ("Gracias por visitar Oh no! Could I Have more T-shirts?! ")
                intentarOtraVez = "no";
                break;
            case "3":
                console.log(" How u doin? Especial para invitar a chicas a salir! esta remera tiene un costo de $6000");
                let valor2 = this.calculadoraConDescuento(7000, 20);
                alert("How u doin? Especial para invitar a chicas a salir! esta remera tiene un costo de $6000 pero con el 20% off serian $" + valor2);
                alert ("Gracias por visitar Oh no! Could I Have more T-shirts?! ")
                intentarOtraVez = "no";
                break;
            default:
                console.log(" Ninguna de las opciones anteriores es valida");
                break;
        }
    }

} while (continuarQuizz === "no");

function calculadoraConDescuento(total, descuento) {
    let desc = (total * descuento) / 100;
    let totalConDes = total - desc;

    return totalConDes;

}

alert ("Gracias por visitar Oh no! Could I Have more T-shirts?! ")









