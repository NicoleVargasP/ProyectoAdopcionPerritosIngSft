export default function registrarMascota(id, nom, edad, especie, descripcion, contacto, mascotasRegistradas = []) {
  
  // Validar campos vacíos
  if (!id || !nom || !edad || !especie || !descripcion || !contacto) {
    return "Por favor, completa todos los campos.";
  }

  // Validar que ID sea número
  if (isNaN(id)) {
    return "El ID debe ser un número.";
  }

  // Validar que Edad sea número
 if (edad !== "Sin edad asignada" && isNaN(Number(edad))) {
  return "La edad debe ser un número o 'Sin edad asignada'.";
}
  const telefonoRegex = /^(\+?\d{7,15}|\d{3}-\d{6,10})$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!telefonoRegex.test(contacto) && !emailRegex.test(contacto)) {
    return "El contacto debe ser un número telefónico o un correo electrónico válido.";
  }

  // Validar que ID sea único
  if (mascotasRegistradas.some(m => m.id === id)) {
    return "El ID ya está registrado.";
  }

    return "Se registró la mascota con éxito" +
      "<p>Id: "+id+"</p>"+
        "<p>Nombre: "+nom+"</p>"+
        "<p>Edad: " +edad+"</p>"+
        "<p>Especie: " +especie+"</p>"+
        "<p>Descripcion: "+descripcion+"</p>"+
        "<p>Contacto: "+contacto+"</p>";
} 




