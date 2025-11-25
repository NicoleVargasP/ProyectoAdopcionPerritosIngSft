import { validarAplicacion } from "./validarAplicacion.js";

export default function registrarAplicacion(
  IdMascota,
  nomMascota,
  ci,
  nombre,
  correo,
  numero,
  razon,
  aplicacionesRegistradas = []
) {
  // Razon opcional
  if (!razon) {
    razon = "Sin Razon";
  }

  // Validación
  const error = validarAplicacion({ IdMascota, nomMascota, ci, nombre, correo, numero, razon }, aplicacionesRegistradas);
  if (error != null) {
    return { exito: false, mensaje: error };
  }

  // Crear aplicación con estado "Pendiente"
  const aplicacion = {
    IdMascota,
    nomMascota,
    ci,
    nombre,
    correo,
    numero,
    razon,
    estado: "Pendiente"
  };

  // Guardar aplicación
  aplicacionesRegistradas.push(aplicacion);

  // Construir mensaje HTML (igual que registrarMascota)
  return {
    exito: true,
    mensaje:
      "Se registró la aplicación con éxito" +
      "<p>Id Mascota: " + IdMascota + "</p>" +
      "<p>Nombre Mascota: " + nomMascota + "</p>" +
      "<p>Ci: " + ci + "</p>" +
      "<p>Nombre: " + nombre + "</p>" +
      "<p>Correo: " + correo + "</p>" +
      "<p>Numero: " + numero + "</p>" +
      "<p>Razon: " + razon + "</p>" +
      "<p>Estado: " + aplicacion.estado + "</p>"
  };
}
