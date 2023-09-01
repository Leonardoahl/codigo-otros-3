// Tenemos un li de productos
// changed all declarations of var to const 
// gave readable names to variables 
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const productItem = document.getElementById("lista-de-productos") // changed to getElementById
const filterInput = document.getElementById("filterInput"); // changed to getElementById
const botonDeFiltro = document.getElementById("filterBtn"); // changed to getElementById
console.log(productItem);
console.log(filterInput);

function displayProductos(productos){ //inserted the for into a function named display  products
  for (let i = 0; i < productos.length; i++) {
    const div = document.createElement("div")
    div.classList.add("producto")
  
    const title = document.createElement("p")
    title.classList.add("titulo")
    title.textContent = productos[i].nombre
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
  
    div.appendChild(title)
    div.appendChild(imagen)
  
    productItem.appendChild(div)
  }
}

botonDeFiltro.onclick = () => { // made it an arrow function bc it looks better for me :v
  while (productItem.firstChild) {
    productItem.removeChild(productItem.firstChild);
  }

  const texto = filterInput.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    const div = document.createElement("div")
    div.classList.add("producto")
  
    const title = document.createElement("p")
    title.classList.add("titulo")
    title.textContent = productosFiltrados[i].nombre
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    div.appendChild(title)
    div.appendChild(imagen)
  
    productItem.appendChild(div)
  }
}

const filtrado = (productos = [], texto) => { //made it possible to search specific name but only works if typed correctly :c
  console.log(texto)
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto) || item.nombre.includes(texto)); 
}  
// ME NEED TIME >:(((((((
displayProductos(productos)