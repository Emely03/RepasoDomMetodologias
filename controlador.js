//cuando las etiquetas estan dentro del dom son las etiquetas de html, renderizacion de componetes pintar html desde javascript
let titulo = document.getElementById("titulo")
console.log(titulo)
//el punto parea adquirir la propiedad, textContent(quemar) conrolando una etiqueta
//1.Cambiar el texto de una etiqueta h1
titulo.textContent="CHAO"

//2.Cambiar La imagen (o la fuente), "foto me trae la etiqueta"
let imagen=document.getElementById("foto")
//Cambiar la imagen del html(copiar dirección de imagen desde el navegador)
imagen.src="https://pm1.narvii.com/6626/a73df3afb14a61710b50015847507037988d9a52_hq.jpg"

//3.Modificar o agregar estilos los estilos, se va a la lista de clases y add para agg la clase que contiene el estilo
titulo.classList.add("letra")
//titulo.classList.remove("letra") para eliminar el diseño

//4. Detectando eventos con funciones
let boton=document.getElementById("boton")
//Decir primero que evento debo escuchar addEventListener, funcion anonima no tiene nombre y se ejecuta de inmediato
// funcion parametro de otra
boton.addEventListener("click", function(){
    console.log("hice click")
})

