// validarMascota.js
export function validarMascota(data, mascotasRegistradas) {
  const { id, nombre, edad, especie, descripcion, contacto } = data;

  // Validar vacíos
  if (!id || !nombre || !edad || !especie || !descripcion || !contacto) {
    return { ok: false, error: "Por favor, completa todos los campos." };
  }

  // ID positivo y numérico
  if (isNaN(id) || Number(id) <= 0) {
    return { ok: false, error: "El ID debe ser un número positivo." };
  }

  // ID único
  if (mascotasRegistradas.some(m => m.id === Number(id))) {
    return { ok: false, error: "El ID ya está registrado." };
  }

  // Validación de nombre: solo letras y espacios
  const nombreRegex = /^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/;
  if (!nombreRegex.test(nombre)) {
    return { ok: false, error: "El nombre solo debe contener letras." };
  }

  // Validación de especie: una sola palabra sin espacios raros
  const especieRegex = /^[A-Za-zÁÉÍÓÚÑáéíóúñ]+$/;
  if (!especieRegex.test(especie)) {
    return { ok: false, error: "La especie debe contener solo una palabra y sin números." };
  }

  // Edad: número válido a menos que diga "Sin edad asignada"
  if (edad !== "Sin edad asignada") {
    if (isNaN(Number(edad)) || Number(edad) < 0 || Number(edad) > 40) {
      return {
        ok: false,
        error: "La edad debe ser un número entre 0 y 40, o 'Sin edad asignada'."
      };
    }
  }

  // Validar contacto: teléfono o correo
  const telefonoRegex = /^(\+?\d{7,15}|\d{3}-\d{6,10})$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!telefonoRegex.test(contacto) && !emailRegex.test(contacto)) {
    return {
      ok: false,
      error: "El contacto debe ser un número telefónico o un correo válido."
    };
  }

  return { ok: true };
}
