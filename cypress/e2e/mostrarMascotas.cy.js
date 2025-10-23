describe("Mostrar Mascotas", () => {
    beforeEach(() => {
    cy.visit("/"); // abre la página principal (usa baseUrl del config)
    
  });
  
  it("Cuando se muestra mascotas que muestre la mascota inicial(predeterminada)", () => {
    cy.get("#mostrar-mascotas-btn").click(); // muestra los inputs
    cy.get(".btn-adoptar").should("exist").and("be.visible");
    cy.get("#registro-mascotas").should("contain", "Nombre: Pelula", "Edad: 8");
  });
describe("Pruebas de registro y visualización de mascotas", () => {

  beforeEach(() => {
    cy.visit("index.html"); // Ajusta la ruta según tu proyecto
  });

  it("Debe mostrar el formulario al presionar 'Publicar Mascota'", () => {
    cy.get("#mostrar-registrar-btn").click();
    cy.get("#mascota-form").should("be.visible");
    cy.get("#mostrar-registrar-btn").should("not.be.visible");
  });

  it("Debe registrar una mascota y mostrar mensaje de éxito", () => {
    cy.get("#mostrar-registrar-btn").click();
    cy.get("#id").type("1");
    cy.get("#nombre").type("Firulais");
    cy.get("#edad").type("3");
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").type("Juguetón");
    cy.get("#contacto").type("555-123");
    cy.get("#mascota-form").submit();

    cy.get("#registro-mascotas").should("contain.text", "Se registró la mascota con éxito");
  });

  it("Debe mostrar todas las mascotas registradas al presionar 'Ver Mascotas'", () => {
    // Registrar dos mascotas
    cy.get("#mostrar-registrar-btn").click();
    cy.get("#id").type("1");
    cy.get("#nombre").type("Michi");
    cy.get("#edad").type("2");
    cy.get("#especie").type("Gato");
    cy.get("#descripcion").type("Dormilón");
    cy.get("#contacto").type("111-222");
    cy.get("#mascota-form").submit();

    cy.get("#mostrar-registrar-btn").click();
    cy.get("#id").type("2");
    cy.get("#nombre").type("Rex");
    cy.get("#edad").type("5");
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").type("Guardían");
    cy.get("#contacto").type("333-444");
    cy.get("#mascota-form").submit();

    // Mostrar todas las mascotas
    cy.get("#mostrar-mascotas-btn").click();
    cy.get("#registro-mascotas").should("contain.text", "Michi");
    cy.get("#registro-mascotas").should("contain.text", "Rex");
    cy.get("#registro-mascotas .btn-adoptar").should("have.length", 3);
  });

});

});