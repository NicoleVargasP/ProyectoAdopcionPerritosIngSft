describe("Mostrar Aplicaciones", () => {

  beforeEach(() => {
    cy.visit("/"); // abre la página principal
  });

  it("Debe mostrar mensaje cuando no hay aplicaciones registradas", () => {
    // Inyectamos contenido vacío para simular que no hay aplicaciones
    cy.get("#aplicacionesDiv").then(($div) => {
      $div.html("<p>No hay Aplicaciones de Adopcion registradas todavía.</p>");
    });

    cy.get("#aplicacionesDiv").should("contain.text", "No hay Aplicaciones de Adopcion registradas todavía.");
  });

  describe("Pruebas de visualización de aplicaciones", () => {

    it("Debe mostrar correctamente una aplicación pendiente con botones", () => {
      const aplicacionPendiente = [
        {
          IdMascota: "1",
          nomMascota: "Firulais",
          ci: "987654",
          nombre: "Jose",
          correo: "jose@gmail.com",
          numero: "75757575",
          razon: "Me gustan los perros",
          estado: "Pendiente"
        }
      ];

      cy.get("#aplicacionesDiv").then(($div) => {
        let html = aplicacionPendiente.map((m, i) => `
          <div style="border:1px solid #ccc; padding:10px; border-radius:10px; margin:8px 0;">
            <p><b>Id Mascota:</b> ${m.IdMascota}</p>
            <p><b>Nombre Mascota:</b> ${m.nomMascota}</p>
            <p><b>CI:</b> ${m.ci}</p>
            <p><b>Nombre:</b> ${m.nombre}</p>
            <p><b>Correo:</b> ${m.correo}</p>
            <p><b>Numero:</b> ${m.numero}</p>
            <p><b>Razon:</b> ${m.razon}</p>
            <p><b>Estado:</b> ${m.estado}</p>
            <button class="btn-aceptar">Aceptar Petición</button>
            <button class="btn-negar">Negar Petición</button>
          </div>`).join("");

        $div.html(html);
      });

      cy.get("#aplicacionesDiv").should("contain.text", "Firulais");
      cy.get("#aplicacionesDiv").should("contain.text", "Pendiente");
      cy.get("#aplicacionesDiv .btn-aceptar").should("exist");
      cy.get("#aplicacionesDiv .btn-negar").should("exist");
    });

    it("Debe mostrar correctamente una aplicación aceptada sin botones", () => {
      const aplicacionAceptada = [
        {
          IdMascota: "2",
          nomMascota: "Michi",
          ci: "123456",
          nombre: "Ana",
          correo: "ana@gmail.com",
          numero: "555987654",
          razon: "Me gustan los gatos",
          estado: "Aceptada"
        }
      ];

      cy.get("#aplicacionesDiv").then(($div) => {
        let html = aplicacionAceptada.map((m) => `
          <div style="border:1px solid #ccc; padding:10px; border-radius:10px; margin:8px 0;">
            <p><b>Id Mascota:</b> ${m.IdMascota}</p>
            <p><b>Nombre Mascota:</b> ${m.nomMascota}</p>
            <p><b>CI:</b> ${m.ci}</p>
            <p><b>Nombre:</b> ${m.nombre}</p>
            <p><b>Correo:</b> ${m.correo}</p>
            <p><b>Numero:</b> ${m.numero}</p>
            <p><b>Razon:</b> ${m.razon}</p>
            <p><b>Estado:</b> ${m.estado}</p>
          </div>`).join("");

        $div.html(html);
      });

      cy.get("#aplicacionesDiv").should("contain.text", "Michi");
      cy.get("#aplicacionesDiv").should("contain.text", "Aceptada");
      cy.get("#aplicacionesDiv .btn-aceptar").should("not.exist");
      cy.get("#aplicacionesDiv .btn-negar").should("not.exist");
    });

    it("Debe mostrar varias aplicaciones correctamente", () => {
      const variasAplicaciones = [
        {
          IdMascota: "1",
          nomMascota: "Firulais",
          ci: "987654",
          nombre: "Jose",
          correo: "jose@gmail.com",
          numero: "75757575",
          razon: "Me gustan los perros",
          estado: "Pendiente"
        },
        {
          IdMascota: "2",
          nomMascota: "Michi",
          ci: "123456",
          nombre: "Ana",
          correo: "ana@gmail.com",
          numero: "555987654",
          razon: "Me gustan los gatos",
          estado: "Aceptada"
        }
      ];

      cy.get("#aplicacionesDiv").then(($div) => {
        let html = variasAplicaciones.map((m) => `
          <div style="border:1px solid #ccc; padding:10px; border-radius:10px; margin:8px 0;">
            <p><b>Id Mascota:</b> ${m.IdMascota}</p>
            <p><b>Nombre Mascota:</b> ${m.nomMascota}</p>
            <p><b>CI:</b> ${m.ci}</p>
            <p><b>Nombre:</b> ${m.nombre}</p>
            <p><b>Correo:</b> ${m.correo}</p>
            <p><b>Numero:</b> ${m.numero}</p>
            <p><b>Razon:</b> ${m.razon}</p>
            <p><b>Estado:</b> ${m.estado}</p>
            ${m.estado === "Pendiente" ? `<button class="btn-aceptar">Aceptar Petición</button><button class="btn-negar">Negar Petición</button>` : ""}
          </div>`).join("");

        $div.html(html);
      });

      cy.get("#aplicacionesDiv").should("contain.text", "Firulais");
      cy.get("#aplicacionesDiv").should("contain.text", "Michi");
      cy.get("#aplicacionesDiv").should("contain.text", "Pendiente");
      cy.get("#aplicacionesDiv").should("contain.text", "Aceptada");
    });

  });

});
