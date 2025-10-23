export default function registrarAplicacion(IdMascota, nomMascota, ci, nombre, correo, numero, razon) {
  if (!razon) {
    razon = "Sin Razon";
  }

  if (!IdMascota || !nomMascota || !ci || !nombre || !correo || !numero) {
    return {exito: false,mensaje: "Ingrese todos los parametros requeridos porfavor"};
  }

  // Validaciones de correo y número telefónico
  const telefonoRegex = /^(\+?\d{7,15}|\d{3}-\d{6,10})$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!telefonoRegex.test(numero) && !emailRegex.test(correo)) {
        return {exito: false,mensaje: "Ingrese un número telefónico o correo electrónico válido."};
  }

  return (
    "Se registró la aplicacion con éxito" +
    "<p>Id Mascota: " + IdMascota + "</p>" +
    "<p>Nombre Mascota: " + nomMascota + "</p>" +
    "<p>Ci: " + ci + "</p>" +
    "<p>Nombre: " + nombre + "</p>" +
    "<p>Correo: " + correo + "</p>" +
    "<p>Numero: " + numero + "</p>" +
    "<p>Razon: " + razon + "</p>"
  );
}
