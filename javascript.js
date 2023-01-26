let paleta = "comun";
let cuadraditos = 0;
let alturaVentanaPadre = 550;
let anchoVentanaPadre = 550;
let alturaCaja = 11;
let anchoCaja = 11;
let cantidadColumnas = 50;
const padre = document.querySelector("#ventanaPadre")
var r = document.querySelector(":root");
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");


//altura y ancho = columnas / altura y ancho ventana padre
//cantidad cajas = columnas * columnas
slider.oninput = function() {
    cantidadColumnas = this.value;
    redimensionar();
    poblar();
}

function redimensionar() {
    alturaCaja = alturaVentanaPadre / cantidadColumnas;
    anchoCaja = anchoVentanaPadre / cantidadColumnas;
    r.style.setProperty("--columnas", `repeat(${cantidadColumnas}, auto)`);
    r.style.setProperty("--altura", `${alturaCaja}px`);
    r.style.setProperty("--ancho", `${anchoCaja}px`);

}

function despoblar() {
    let cajasEnPantalla = document.querySelectorAll("#ventanaPadre > div");
    cajasEnPantalla.forEach(cajaEnPantalla => cajaEnPantalla.remove());
    cuadraditos = 0;
}

function poblar() {
    despoblar();
    cantidadCajas = cantidadColumnas * cantidadColumnas;
    for (; cuadraditos < cantidadCajas; cuadraditos++){
        const nuevoCuadrado = document.createElement("div");
        padre.appendChild(nuevoCuadrado);
    } 
    cambiarColores("comun"); 
}

function reiniciar(){
    var aBorrar = document.querySelectorAll("#ventanaPadre > div");
    aBorrar.forEach(cuadrado => cuadrado.style.backgroundColor = "#f5f5f5");
}

function cambiarColores(paleta) {
    const cajitas = document.querySelectorAll("#ventanaPadre > div");
  
    cajitas.forEach((item) => {
        const cajita = item;
        cajita.count = 0;
        cajita.addEventListener("mouseenter", (e) => {
        if (paleta === "comun") {
            e.target.style.backgroundColor = "#333333";
            e.target.style.opacity = 1;
        } else if (paleta === "borrador") {
            e.target.style.backgroundColor = "#f5f5f5";
            e.target.style.opacity = 1;
        } else if (paleta === "random") {
            e.target.style.opacity = 1;
            e.target.style.backgroundColor = paletaRandom();
        }
      });
    });
}
const botonesControl = document.querySelectorAll("#controles > .colores > button");

botonesControl.forEach((item) => {
item.addEventListener("click", () => {
    paleta = item.id;
    if (paleta === "comun") {
        cambiarColores("comun")
    }  else if (paleta === "random") {
        cambiarColores("random")
    }  
}
)}
)
const botonesBorrado = document.querySelectorAll("#controles > .borrado > button");

botonesBorrado.forEach((item) => {
item.addEventListener("click", () => {
    paleta = item.id;
    if (paleta === "borrador") {
       cambiarColores("borrador")
    } else if (paleta === "reiniciar") {
        reiniciar();    
    } 
}
)}
)

function paletaRandom() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var colorRandom = "rgb(" + x + "," + y + "," + z + ")";  
    return (colorRandom);
}
poblar();
cambiarColores("comun")