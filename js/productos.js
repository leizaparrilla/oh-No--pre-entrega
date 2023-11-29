const TITULO = document.getElementById("tituloPrincipal");
console.log(TITULO)

let etiqueta = document.getElementsByTagName("li");
console.log(etiqueta);

//CARDS

class Producto{
    constructor(nombre, precio, img){
        this.remera = nombre;
        this.precio = precio;
        this.img= img;
    }
}

const WEWERE = new Producto("we were on a break","16000"," https://i.pinimg.com/564x/76/3b/d3/763bd3a934ad4832f1a8aa7690a48f22.jpg");
const PIVOT = new Producto("PIVOT!","16000", "https://i.pinimg.com/564x/e3/2a/da/e32ada74bb865fd0401bd69d20cb721d.jpg ");
const IMFINE = new Producto("I´m fine!","16000", " https://i.pinimg.com/564x/ad/0b/cf/ad0bcf64de8eb74b50f1fc57a5c94705.jpg");
const PHALANGE = new Producto("Regina Phalange","16000","https://i.pinimg.com/564x/5b/2f/25/5b2f256aeb26d79eb1479f4059ae5483.jpg ");
const FRENCH = new Producto("You are not speaking french!","16000", "https://i.pinimg.com/564x/8e/88/37/8e88378f26129a4a667c2ed411bd0e39.jpg");
const WISH = new Producto("I wish i could but i dont want to!","16000", "https://i.pinimg.com/564x/d3/a5/e0/d3a5e06847383f13c0bd6dcf41f85307.jpg ");

const ArrayProducto = [WEWERE, PIVOT, IMFINE, PHALANGE, FRENCH, WISH ];

ArrayProducto.forEach(producto =>{
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
                    <img src = " ${producto.img}">
                    <p>nombre: ${producto.remera}</p>
                    <p>precio: ${producto.precio}</p>
                    
                    <button> Agregar al Carrito</button>
    `
    contenedorProducto.appendChild(div);
})
