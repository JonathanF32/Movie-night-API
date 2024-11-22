import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearPelicula(evento){

    evento.preventDefault('ul');
    const nombre = document.querySelector("[data-nombre]").value;        
    const imagen = document.querySelector("[data-imagen]").value;
    const precio = document.querySelector("[data-precio]").value;
    const puntuacion = document.querySelector("[data-puntuacion]").value;

    try {
      await conexionAPI.enviarPelicula(nombre, imagen, precio, puntuacion);

    } catch (e) {
        alert('Error al cargar video')
    }
    

  }    

formulario.addEventListener("submit",evento => crearPelicula(evento));
