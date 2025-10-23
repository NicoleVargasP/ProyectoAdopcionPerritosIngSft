import registrarMascota from "./registrarMascota.js";

describe("Función registrarMascota", () => {

  test("Debe devolver mensaje de error si falta algún campo", () => {
    const resultado = registrarMascota("", "Firulais", 3, "Perro", "Muy juguetón", "7484547");
    expect(resultado.mensaje).toBe("Por favor, completa todos los campos.");
  });

  test("Debe registrar correctamente una mascota con todos los campos válidos", () => {
    const resultado = registrarMascota(
      1,
      "Michi",
      2,
      "Gato",
      "Color blanco y ojos verdes",
      "maria@mail.com",
      []
    );

    expect(resultado).toContain("Se registró la mascota con éxito");
  });

  test("Debe permitir 'Sin edad asignada' como edad válida", () => {
    const resultado = registrarMascota(
      2,
      "Firulais",
      "Sin edad asignada",
      "Perro",
      "Muy juguetón",
      "7485497",
      []
    );

    expect(resultado).toContain("Se registró la mascota con éxito");
  });

  test("Debe devolver error si todos los campos son nulos", () => {
    const resultado = registrarMascota(null, null, null, null, null, null);
    expect(resultado.mensaje).toBe("Por favor, completa todos los campos.");
  });

  test("Debe devolver error si el ID no es un número", () => {
    const resultado = registrarMascota("abc", "Firulais", 3, "Perro", "Juguetón", "4548784", []);
    expect(resultado.mensaje).toBe("El ID debe ser un número.");
  });

  test("Debe devolver error si la edad no es un número ni 'Sin edad asignada'", () => {
    const resultado = registrarMascota(1, "Firulais", "tres", "Perro", "Juguetón", "44874557", []);
    expect(resultado.mensaje).toBe("La edad debe ser un número o 'Sin edad asignada'.");
  });

  test("Debe devolver error si el ID ya existe", () => {
    const mascotasRegistradas = [{ id: "1", nombre: "Rex" }];
    const resultado = registrarMascota("1", "Firulais", 2, "Perro", "Lindo", "7845978", mascotasRegistradas);
    expect(resultado.mensaje).toBe("El ID ya está registrado.");
  });

  test("Debe devolver error si el contacto no es teléfono ni correo", () => {
    const resultado = registrarMascota(3, "Rex", 5, "Perro", "Guardían", "contacto_invalido", []);
    expect(resultado.mensaje).toBe("El contacto debe ser un número telefónico o un correo electrónico válido.");
  });

});
