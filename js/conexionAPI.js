
async function listarPeliculas(){
    const conexion = await fetch("http://localhost:3000/pelicula");

    const conexionConvertida = conexion.json()
   

    return conexionConvertida
}

 async function enviarPelicula(nombre, imagen, precio, puntuacion){
    const conexion = await fetch("http://localhost:3000/pelicula",{
        method: "POST", 
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify({          
          nombre:nombre,
          imagen:imagen,
          precio:precio,
          puntuacion:puntuacion  
              
        })
    })
    const conexionConvertida= await conexion.json();
    if(!conexion.ok){
        throw new Error("Error al enviar pelicula");
    }

    return conexionConvertida;
}

//eliminar
async function eliminarPelicula(id) {
    const conexion = await fetch(`http://localhost:3000/pelicula/${id}`, {
        method: "DELETE",
    });

    if (!conexion.ok) {
        throw new Error("Error al eliminar la película");
    }
    return;
}




export const conexionAPI={
    listarPeliculas, enviarPelicula, eliminarPelicula
}

