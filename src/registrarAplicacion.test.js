import registrarAplicacion from "./registrarAplicacion";

describe("Función registrarAplicacion", () => {

  test("Debe devolver mensaje de error si falta algún campo", () => {
    const resultado = registrarAplicacion(8, "Pelula", null, "Jorge", "jorge@email.com", 789456, "Me Gustan los perritos", "555-123");
    expect(resultado.mensaje).toBe("Ingrese todos los parametros requeridos porfavor");
  });

  test("Debe aceptar un número telefónico válido", () => {
    const resultado = registrarAplicacion(1, "Michi", "9876543", "Ana", "ana@mail.com", "555-123784", "Adopción");
    expect(resultado.mensaje).toContain("Se registró la aplicación con éxito");
  });

  test("Debe aceptar un correo electrónico válido", () => {
    const resultado = registrarAplicacion(2, "Toby", "6543210", "Carlos", "carlos@mail.com", "+59176543210", "Adopción");
    expect(resultado.mensaje).toContain("Se registró la aplicación con éxito");
  });

  test("Debe devolver error si el correo y número son inválidos", () => {
    const resultado = registrarAplicacion(3, "Rocky", "4567890", "Lucía", "correo_invalido", "numero123", "Adopción");
    expect(resultado.mensaje).toBe("Ingrese un número telefónico o correo electrónico válido.");
  });

  // Nueva prueba 1: Razon vacía → asigna "Sin Razon"
  test("Si la razon es vacía, debe asignar 'Sin Razon'", () => {
    const resultado = registrarAplicacion(4, "Firulais", "1234567", "Laura", "laura@mail.com", "555-678901", "");
    expect(resultado.mensaje).toContain("<p>Razon: Sin Razon</p>");
    expect(resultado.exito).toBe(true);
  });

  // Nueva prueba 2: CI negativo → error
  test("Debe devolver error si el CI es negativo o no numérico", () => {
    const resultado = registrarAplicacion(5, "Bobby", -123, "Miguel", "miguel@mail.com", "555-123456", "Adopción");
    expect(resultado.mensaje).toBe("El CI debe ser un número positivo.");
  });

  // Nueva prueba 3: Nombre del aplicante con caracteres inválidos → error
  test("Debe devolver error si el nombre del aplicante contiene números o caracteres especiales", () => {
    const resultado = registrarAplicacion(6, "Max", "9876543", "An@123", "ana@mail.com", "555-789012", "Adopción");
    expect(resultado.mensaje).toBe("El nombre del aplicante solo debe contener letras.");
  });

});
