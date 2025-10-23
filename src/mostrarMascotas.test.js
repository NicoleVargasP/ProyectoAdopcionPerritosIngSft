import mostrarMascotas from "./mostrarMascotas.js";

describe("Función mostrarMascotas", () => {
  
  test("Debe devolver el mensaje si no hay mascotas", () => {
    const resultado = mostrarMascotas([]);
    expect(resultado).toBe("<p>No hay mascotas registradas todavía.</p>");
  });
  
  test("Debe mostrar mensaje si no hay mascotas", () => {
    const resultado = mostrarMascotas([]);
    expect(resultado).toBe("<p>No hay mascotas registradas todavía.</p>");
  });

  test("Debe mostrar correctamente una mascota", () => {
    const mascotas = [
      {
        id: "1",
        nombre: "Firulais",
        edad: "3",
        especie: "Perro",
        descripcion: "Juguetón",
        contacto: "555-123"
      }
    ];

    const resultado = mostrarMascotas(mascotas);

    expect(resultado).toContain("<p><b>Id:</b> 1</p>");
    expect(resultado).toContain("<p><b>Nombre:</b> Firulais</p>");
    expect(resultado).toContain("Formulario Adopcion");
  });

  test("Debe mostrar múltiples mascotas correctamente", () => {
    const mascotas = [
      { id: "1", nombre: "Michi", edad: "2", especie: "Gato", descripcion: "Dormilón", contacto: "111-222" },
      { id: "2", nombre: "Rex", edad: "5", especie: "Perro", descripcion: "Guardían", contacto: "333-444" }
    ];

    const resultado = mostrarMascotas(mascotas);

    expect(resultado.match(/<div/g).length).toBe(2); // hay 2 tarjetas
    expect(resultado).toContain("Michi");
    expect(resultado).toContain("Rex");
  });

  });
