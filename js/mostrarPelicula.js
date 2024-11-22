import {conexionAPI} from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")
function crearCard(nombre,imagen,precio,puntuacion,id){
    const pelicula = document.createElement("li")
    pelicula.className="pelicula_borde";
    pelicula.innerHTML=`<img src="${imagen}" alt="${nombre}" class="pelicula_imagen">
                        <h3>${nombre}</h3>
                        <div class="pelicula_puntuacion">
                            <p>$${precio}</p>
                        <i class="fa fa-star" aria-hidden="true"><span class="pelicula_puntuacion_color"> ${puntuacion}</span></i>                      
                            <i class="fa fa-trash" aria-hidden="true" id="eliminar" data-id="${id}"></i>
                        </div>`;
    return pelicula;                   
}

//boton eliminar
lista.addEventListener("click", async (evento) => {
    if (evento.target.classList.contains("fa-trash")) {
        const idPelicula = evento.target.dataset.id;
        const pelicula = evento.target.closest("li"); // Obtener el <li> correspondiente
        try {
            await conexionAPI.eliminarPelicula(idPelicula);
            pelicula.remove(); // Eliminar la película de la interfaz
        } catch (error) {
            alert('Error al eliminar la película');
        }
    }
});




async function listarPeliculas(){
    try {
        const listaAPI = await conexionAPI.listarPeliculas()

        listaAPI.forEach(pelicula=>lista.appendChild(crearCard(pelicula.nombre,pelicula.imagen,pelicula.precio,pelicula.puntuacion,pelicula.id))) 
   
    } catch (error) {
        lista.innerHTML=`<h2 class="mensaje__titulo>Error de conexion</h2>`;
    }
    
     
}
listarPeliculas();