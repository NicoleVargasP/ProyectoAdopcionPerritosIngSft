describe("Formulario Adopcion", () => {
    beforeEach(() => {
    cy.visit("/"); // abre la página principal (usa baseUrl del config)
    
  });
  
  it("Deberia mostrar un boton para ir al formulario de adopcion de una mascota", () => {
    cy.get("#mostrar-registrar-btn").click(); // muestra los inputs
    // Dejar el campo vacío
    cy.get("#nombre").type("Firulais");
    cy.get("#id").type("123")
    cy.get("#edad").type("5");
    cy.get("#especie").type("Gatito");
    cy.get("#descripcion").type("Es adorable");
    cy.get("#contacto").type("98766543");
    
    cy.get('input[type="submit"]').first().click(); // presiona el botón para enviar registrar mascota

    cy.get("#mostrar-mascotas-btn").click();

    cy.get(".btn-adoptar").should("exist").and("be.visible");
  });

});