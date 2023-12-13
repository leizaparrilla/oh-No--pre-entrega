const TITULO = document.getElementById("tituloPrincipal");
console.log(TITULO)

let etiqueta = document.getElementsByTagName("li");
console.log(etiqueta);

//CARDS

class Producto{
    constructor(id,nombre, precio, img){
        this.id = id;
        this.remera = nombre;
        this.precio = precio;
        this.img= img;
        
    }
}
2
const WEWERE = new Producto ("1","we were on a break","16000"," https://i.pinimg.com/564x/76/3b/d3/763bd3a934ad4832f1a8aa7690a48f22.jpg");
const PIVOT = new Producto("2", "PIVOT!","16000", "https://i.pinimg.com/564x/e3/2a/da/e32ada74bb865fd0401bd69d20cb721d.jpg ");
const IMFINE = new Producto("3","I´m fine!","16000", " https://i.pinimg.com/564x/ad/0b/cf/ad0bcf64de8eb74b50f1fc57a5c94705.jpg");
const PHALANGE = new Producto("4", "Regina Phalange","16000","https://i.pinimg.com/564x/5b/2f/25/5b2f256aeb26d79eb1479f4059ae5483.jpg ");
const FRENCH = new Producto("5", "You are not speaking french!","16000", "https://i.pinimg.com/564x/8e/88/37/8e88378f26129a4a667c2ed411bd0e39.jpg");
const WISH = new Producto("6","I wish i could but i dont want to!","16000", "https://i.pinimg.com/564x/d3/a5/e0/d3a5e06847383f13c0bd6dcf41f85307.jpg ");

const ArrayProducto = [WEWERE, PIVOT, IMFINE, PHALANGE, FRENCH, WISH ];

ArrayProducto.forEach(producto =>{
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
                    <img src = " ${producto.img}">
                    <p>nombre:" ${producto.remera}"</p>
                    <p>precio: "${producto.precio}"</p>
                    
                    <button onclick="agregarAlCarrito('${producto.remera}',${producto.precio})"> agregar al carrito </button>
    `
    contenedorProducto.appendChild(div);
})

//AGREGAR AL CARRITO
function agregarAlCarrito(nombre,precio){
    
    const carrito= JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({nombre, precio});
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    
}
;

//AGREGAR PRODUCTOS AL CARRITO
function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito'))|| [];
    const listaProductos = document.getElementById('lista-productos');
    const totalElement = document.getElementById('total');
    let total = 0;

    listaProductos.innerHTML = '';

    carrito.forEach(producto => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${producto.nombre}</span>
            <span>$${producto.precio}</span>
        `;
        listaProductos.appendChild(listItem);

        total += producto.precio;

    });
    totalElement.textContent = total;
};

function vaciarCarrito(){
    localStorage.removeItem('carrito');
    mostrarCarrito();
}


