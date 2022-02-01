const imagenes = document.querySelectorAll(".img-galeria")
const imagenLight = document.querySelector(".agregar-imagen")
const contenedorLight  = document.querySelector(".imagen-light")

imagenes.forEach(imagen =>{
    imagen.addEventListener("click", ()=>{
        console.log(imagen.getAttribute('src'))
    })
})

const aparecerImagen = (imagen)=>{
    
}