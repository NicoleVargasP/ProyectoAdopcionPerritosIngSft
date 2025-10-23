// cypress/e2e/busquedaMascotas.cy.js

describe("Búsqueda de Mascotas", () => {
  beforeEach(() => {
    cy.visit("/"); // Abre la página principal

    // --- Mascota 1: Perro llamado Bobby ---
    cy.get("#mostrar-registrar-btn").click();
    cy.get("#id").type("001");
    cy.get("#nombre").type("Bobby");
    cy.get("#edad").type("3");
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").type("Juguetón y amigable");
    cy.get("#contacto").type("12345678");
    cy.get('input[type="submit"]').first().click();

    // --- Mascota 2: Gato llamado Mishi ---
    cy.get("#mostrar-registrar-btn").click();
    cy.get("#id").type("002");
    cy.get("#nombre").type("Mishi");
    cy.get("#edad").type("5");
    cy.get("#especie").type("Gato");
    cy.get("#descripcion").type("Duerme mucho");
    cy.get("#contacto").type("87654321");
    cy.get('input[type="submit"]').first().click();
  });

  it("Debería encontrar una mascota al buscar por su nombre exacto", () => {
    // 1. Ir a la sección de ver mascotas para que aparezca la búsqueda
    cy.get("#mostrar-mascotas-btn").click();

    // 2. Escribir en el campo de búsqueda y presionar el botón
    cy.get("#parametro-busqueda").type("Bobby");
    cy.get("#buscar-btn").click();

    // 3. Verificar los resultados
    cy.get("#registro-mascotas").should("contain", "Bobby"); // Bobby debe estar visible
    cy.get("#registro-mascotas").should("not.contain", "Mishi"); // Mishi no debe estar visible
  });

  it("Debería encontrar todas las mascotas de una misma especie al buscar", () => {
    // 1. Ir a la sección de ver mascotas
    cy.get("#mostrar-mascotas-btn").click();

    // 2. Buscar por la especie "Perro"
    cy.get("#parametro-busqueda").type("Perro");
    cy.get("#buscar-btn").click();

    // 3. Verificar los resultados
    cy.get("#registro-mascotas").should("contain", "Bobby");
    cy.get("#registro-mascotas").should("not.contain", "Mishi");
  });

  it("No debería mostrar resultados si la búsqueda no coincide con ninguna mascota", () => {
    // 1. Ir a la sección de ver mascotas
    cy.get("#mostrar-mascotas-btn").click();

    // 2. Buscar por un término que no existe, como "Loro"
    cy.get("#parametro-busqueda").type("Loro");
    cy.get("#buscar-btn").click();

    // 3. Verificar que ninguna de las mascotas registradas aparece
    cy.get("#registro-mascotas").should("not.contain", "Bobby");
    cy.get("#registro-mascotas").should("not.contain", "Mishi");
  });
  
  it("Debería mostrar todas las mascotas de nuevo si se realiza una búsqueda vacía después de un filtro", () => {
    // 1. Ir a la sección de ver mascotas y hacer una búsqueda inicial
    cy.get("#mostrar-mascotas-btn").click();
    cy.get("#parametro-busqueda").type("Bobby");
    cy.get("#buscar-btn").click();

    // Verificar que el filtro inicial funcionó
    cy.get("#registro-mascotas").should("contain", "Bobby");
    cy.get("#registro-mascotas").should("not.contain", "Mishi");
    
    // 2. Limpiar el campo y buscar de nuevo (búsqueda vacía)
    cy.get("#parametro-busqueda").clear(); // Limpia el input
    cy.get("#buscar-btn").click();

    // 3. Verificar que ambas mascotas están visibles de nuevo
    cy.get("#registro-mascotas").should("contain", "Bobby");
    cy.get("#registro-mascotas").should("contain", "Mishi");
  });
});