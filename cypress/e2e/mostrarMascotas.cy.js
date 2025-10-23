describe("Mostrar Mascotas", () => {
    beforeEach(() => {
    cy.visit("/"); // abre la página principal (usa baseUrl del config)
    
  });
  
  it("Cuando se muestra mascotas que muestre la mascota inicial(predeterminada)", () => {
    cy.get("#mostrar-mascotas-btn").click(); // muestra los inputs
    cy.get(".btn-adoptar").should("exist").and("be.visible");
    cy.get("#registro-mascotas").should("contain", "Nombre: Pelula", "Edad: 8");
  });







});