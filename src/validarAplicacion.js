export function validarAplicacion(data, aplicacionesRegistradas = []) {
  const { IdMascota, nomMascota, ci, nombre, correo, numero, razon } = data;

  // Campos obligatorios
  if (!IdMascota || !nomMascota || !ci || !nombre || !correo || !numero) {
    return "Ingrese todos los parametros requeridos porfavor"; // mensaje ajustado al test
  }

  // CI: positivo y numérico
  if (isNaN(ci) || Number(ci) <= 0) {
    return "El CI debe ser un número positivo.";
  }

  // Nombre: solo letras y espacios
  const nombreRegex = /^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/;
  if (!nombreRegex.test(nombre)) {
    return "El nombre del aplicante solo debe contener letras.";
  }

  // Validaciones de contacto
  const telefonoRegex = /^(\+?\d{7,15}|\d{3}-\d{6,10})$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!telefonoRegex.test(numero) && !emailRegex.test(correo)) {
    return "Ingrese un número telefónico o correo electrónico válido.";
  }

  // Si pasa todo, devuelve null
  return null;
}
