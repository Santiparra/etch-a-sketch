let paleta = "comun";
const padre = document.querySelector("#ventanaPadre")

function poblar() {
    let slider = document.getElementById("myRange");
    let cuadraditos = slider.value;
    let areaAPoblar = cuadraditos * cuadraditos;
    for (; cuadraditos < areaAPoblar; cuadraditos++){
        const nuevoCuadrado = document.createElement("div");
        padre.appendChild(nuevoCuadrado);
    }  
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
const botonesControl = document.querySelectorAll("#controles > button");

botonesControl.forEach((item) => {
item.addEventListener("click", () => {
    paleta = item.id;
    if (paleta === "comun") {
        cambiarColores("comun")
    } else if (paleta === "borrador") {
        cambiarColores("borrador")
    }  else if (paleta === "random") {
        cambiarColores("random")
    }  else if (paleta === "reiniciar") {
        poblar();    
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