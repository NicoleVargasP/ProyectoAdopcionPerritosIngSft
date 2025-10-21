export default function registrarMascota(nom) {
  // validaciones
  if (!nom) {
    return "Por favor, completa todos los campos.";
  }

  return {
    nombre: nom.trim()
  };
}