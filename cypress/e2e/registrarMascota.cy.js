describe("Registrar Mascotas", () => {
  beforeEach(() => {
    cy.visit("/"); // abre la página principal
    cy.get("#btnRegistrarMascota").click(); // muestra los inputs
  });

  it("Campos vacíos muestran mensaje de error", () => {
    cy.get("#id").clear();
    cy.get("#nombre").clear();
    cy.get("#edad").type(2);
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").type("El perrito es muy cariñoso");
    cy.get("#contacto").type(7498657);
    cy.get('button[type="submit"]').click();
    cy.get("#registro-mascotas").should("contain", "Por favor, completa todos los campos.");
  });

  it("Edad vacía muestra mensaje de error", () => {
    cy.get("#id").type(12345);
    cy.get("#nombre").type("Fifi");
    cy.get("#edad").clear();
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").type("El perrito es muy cariñoso");
    cy.get("#contacto").type(7498657);
    cy.get('button[type="submit"]').click();
    cy.get("#registro-mascotas").should("contain", "Por favor, completa todos los campos.");
  });

  it("Especie vacía muestra mensaje de error", () => {
    cy.get("#id").type(12345);
    cy.get("#nombre").type("Fifi");
    cy.get("#edad").type(5);
    cy.get("#especie").clear();
    cy.get("#descripcion").type("El perrito es muy cariñoso");
    cy.get("#contacto").type(7498657);
    cy.get('button[type="submit"]').click();
    cy.get("#registro-mascotas").should("contain", "Por favor, completa todos los campos.");
  });

  it("Descripción y contacto vacíos muestran error", () => {
    cy.get("#id").type(12345);
    cy.get("#nombre").type("Fifi");
    cy.get("#edad").type(5);
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").clear();
    cy.get("#contacto").clear();
    cy.get('button[type="submit"]').click();
    cy.get("#registro-mascotas").should("contain", "Por favor, completa todos los campos.");
  });

  it("Registro correcto con nombre y edad", () => {
    cy.get("#id").type(12345);
    cy.get("#nombre").type("Firulais");
    cy.get("#edad").type("13");
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").type("El perrito es muy cariñoso");
    cy.get("#contacto").type(7498657);
    cy.get('button[type="submit"]').click();
    cy.get("#registro-mascotas").should("contain", "Nombre: Firulais");
    cy.get("#registro-mascotas").should("contain", "Edad: 13");
  });

  it("Registro correcto con ID y especie", () => {
    cy.get("#id").type(12346);
    cy.get("#nombre").type("Firulais");
    cy.get("#edad").type("13");
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").type("El perrito es muy cariñoso");
    cy.get("#contacto").type(7498657);
    cy.get('button[type="submit"]').click();
    cy.get("#registro-mascotas").should("contain", "Id: 12346");
    cy.get("#registro-mascotas").should("contain", "Especie: Perro");
  });

  it("Registro correcto con descripción y contacto", () => {
    cy.get("#id").type(12347);
    cy.get("#nombre").type("Firulais");
    cy.get("#edad").type("13");
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").type("El perrito es muy cariñoso");
    cy.get("#contacto").type(7498657);
    cy.get('button[type="submit"]').click();
    cy.get("#registro-mascotas").should("contain", "Descripcion: El perrito es muy cariñoso");
    cy.get("#registro-mascotas").should("contain", "Contacto: 7498657");
  });

});
