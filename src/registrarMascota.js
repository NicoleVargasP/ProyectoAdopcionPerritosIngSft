export default function registrarMascota(id, nom, edad, especie, descripcion, contacto) {
  // Validaciones
  if (!id || !nom || !edad || !especie || !descripcion || !contacto) {
    return "Por favor, completa todos los campos.";
  } else {
    return "Se registró la mascota con éxito" +
      "<p>Id: "+id+"</p>"+
        "<p>Nombre: "+nom+"</p>"+
        "<p>Edad: " +edad+"</p>"+
        "<p>Especie: " +especie+"</p>"+
        "<p>Descripcion: "+descripcion+"</p>"+
        "<p>Contacto: "+contacto+"</p>";
  }
}
