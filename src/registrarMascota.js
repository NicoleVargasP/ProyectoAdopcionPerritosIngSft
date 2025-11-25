import { validarMascota } from "./validarMascota.js";

export default function registrarMascota(
  id,
  nombre,
  edad,
  especie,
  descripcion,
  contacto,
  mascotasRegistradas = []
) {
  // Usamos la función de validación
  const error = validarMascota({ id, nombre, edad, especie, descripcion, contacto }, mascotasRegistradas);
  if (error!=null) {
    return error; // devuelvo string directamente para mantener compatibilidad
  }
  else{
    // Creamos la mascota con estado "Disponible"
  const mascota = {
    id,
    nombre,
    edad,
    especie,
    descripcion,
    contacto,
    estado: "Disponible", // nueva propiedad
  };

  // Agregamos a la lista
  mascotasRegistradas.push(mascota);

  // Construimos el mensaje en HTML
  return (
    "Se registró la mascota con éxito" +
    "<p>Id: " + id + "</p>" +
    "<p>Nombre: " + nombre + "</p>" +
    "<p>Edad: " + edad + "</p>" +
    "<p>Especie: " + especie + "</p>" +
    "<p>Descripcion: " + descripcion + "</p>" +
    "<p>Contacto: " + contacto + "</p>"
  );
  }

}
