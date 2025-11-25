describe("Registrar Aplicación - Cypress", () => {

  beforeEach(() => {
    cy.visit("index.html"); // Ajusta la ruta si es diferente
  });

  it("Debe registrar una aplicación correctamente con todos los campos", () => {
    cy.get("#mostrar-mascotas-btn").click();
    cy.get("button").contains("Formulario Adopción").first().click();

    cy.get("#ciAplicante").type("9412098");
    cy.get("#nombreAplicante").type("Andres Zubieta");
    cy.get("#correoAplicante").type("andres.zubieta@ucb.edu.bo");
    cy.get("#numeroAplicante").type("764242387");
    cy.get("#razonAdopcion").type("Me gustan mucho los gatos amigables y dormilones");

    cy.get("#registrarAplicacion").click();

    cy.get("#aplicacionesDiv").should("contain", "Se registró la aplicación con éxito");
    cy.get("#aplicacionesDiv").should("contain", "Razon: Me gustan mucho los gatos amigables y dormilones");
  });

  it("Debe registrar una aplicación y asignar 'Sin Razon' si no se proporciona razón", () => {
    cy.get("#mostrar-mascotas-btn").click();
    cy.get("button").contains("Formulario Adopción").first().click();

    cy.get("#ciAplicante").type("1234567");
    cy.get("#nombreAplicante").type("Ana Perez");
    cy.get("#correoAplicante").type("ana@mail.com");
    cy.get("#numeroAplicante").type("555-123456");

    // No se llena el campo razón
    cy.get("#registrarAplicacion").click();

    cy.get("#aplicacionesDiv").should("contain", "Se registró la aplicación con éxito");
    cy.get("#aplicacionesDiv").should("contain", "Razon: Sin Razon");
  });

  it("Debe mostrar error si falta algún campo obligatorio", () => {
    cy.get("#mostrar-mascotas-btn").click();
    cy.get("button").contains("Formulario Adopción").first().click();

    // Limpiar campos obligatorios
    cy.get("#ciAplicante").clear();
    cy.get("#nombreAplicante").clear();
    cy.get("#correoAplicante").clear();
    cy.get("#numeroAplicante").clear();

    cy.get("#registrarAplicacion").click();

    cy.get("#aplicacionesDiv").should("contain", "Ingrese todos los parametros requeridos porfavor");
  });

  it("Debe mostrar error si el CI es inválido", () => {
    cy.get("#mostrar-mascotas-btn").click();
    cy.get("button").contains("Formulario Adopción").first().click();

    cy.get("#ciAplicante").type("-123");
    cy.get("#nombreAplicante").type("Luis Gomez");
    cy.get("#correoAplicante").type("luis@mail.com");
    cy.get("#numeroAplicante").type("555-123456");
    cy.get("#registrarAplicacion").click();

    cy.get("#aplicacionesDiv").should("contain", "El CI debe ser un número positivo.");
  });

  it("Debe mostrar error si el nombre contiene caracteres inválidos", () => {
    cy.get("#mostrar-mascotas-btn").click();
    cy.get("button").contains("Formulario Adopción").first().click();

    cy.get("#ciAplicante").type("1234567");
    cy.get("#nombreAplicante").type("Luis123"); // nombre inválido
    cy.get("#correoAplicante").type("luis@mail.com");
    cy.get("#numeroAplicante").type("555-123456");

    cy.get("#registrarAplicacion").click();

    cy.get("#aplicacionesDiv").should("contain", "El nombre del aplicante solo debe contener letras.");
  });

  it("Debe mostrar error si correo y número son inválidos", () => {
    cy.get("#mostrar-mascotas-btn").click();
    cy.get("button").contains("Formulario Adopción").first().click();

    cy.get("#ciAplicante").type("1234567");
    cy.get("#nombreAplicante").type("Maria Lopez");
    cy.get("#correoAplicante").type("correo_invalido");
    cy.get("#numeroAplicante").type("numero123");

    cy.get("#registrarAplicacion").click();

    cy.get("#aplicacionesDiv").should("contain", "Ingrese un número telefónico o correo electrónico válido.");
  });

});
