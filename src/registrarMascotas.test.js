import registrarMascota from "./registrarMascota.js";
describe("Función registrarMascota", () => {

  const camposBase = {
    id: 1,
    nombre: "Firulais",
    edad: 3,
    especie: "Perro",
    descripcion: "Muy juguetón",
    contacto: "7484547"
  };

  test("Error si falta algún campo", () => {
    const resultado = registrarMascota("", camposBase.nombre, camposBase.edad, camposBase.especie, camposBase.descripcion, camposBase.contacto);
    expect(resultado).toBe("Por favor, completa todos los campos.");
  });

  test("Registro correcto con todos los campos válidos", () => {
    const resultado = registrarMascota(1, "Michi", 2, "Gato", "Color blanco y ojos verdes", "maria@mail.com", []);
    expect(resultado).toContain("Se registró la mascota con éxito");
    expect(resultado).toContain("<p>Nombre: Michi</p>");
  });

  test("Permite 'Sin edad asignada'", () => {
    const resultado = registrarMascota(2, "Firulais", "Sin edad asignada", "Perro", "Muy juguetón", "7485497", []);
    expect(resultado).toContain("Se registró la mascota con éxito");
    expect(resultado).toContain("<p>Edad: Sin edad asignada</p>");
  });

  test("Error si todos los campos son nulos", () => {
    const resultado = registrarMascota(null, null, null, null, null, null);
    expect(resultado).toBe("Por favor, completa todos los campos.");
  });

  test("Error si el ID no es un número", () => {
    const resultado = registrarMascota("abc", "Firulais", 3, "Perro", "Juguetón", "4548784", []);
    expect(resultado).toBe("El ID debe ser un número positivo.");
  });

  test("Error si la edad no es un número ni 'Sin edad asignada'", () => {
    const resultado = registrarMascota(1, "Firulais", "tres", "Perro", "Juguetón", "44874557", []);
    expect(resultado).toBe("La edad debe ser un número entre 0 y 20 o 'Sin edad asignada'.");
  });

  test("Error si el ID ya existe", () => {
    const mascotasRegistradas = [{ id: "1", nombre: "Rex" }];
    const resultado = registrarMascota("1", "Rex", 2, "Perro", "Lindo", "7845978", mascotasRegistradas);
    expect(resultado).toBe("El ID ya está registrado.");
  });

  test("Error si el contacto no es válido", () => {
    const resultado = registrarMascota(3, "Rex", 5, "Perro", "Guardían", "contacto_invalido", []);
    expect(resultado).toBe("El contacto debe ser un número telefónico o un correo electrónico válido.");
  });

});
