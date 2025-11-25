import registrarMascota from "./registrarMascota";
import mostrarMascotas from "./mostrarMascotas";
import registrarAplicacion from "./registrarAplicacion";
import mostrarAplicaciones from "./mostrarAplicaciones";
import { aceptarAplicacion, negarAplicacion } from "./respuestaAplicacion";

const mascotasGlobales = [];
const AplicacionesGlobales=[];
const mascotaInicial = {
  id: "4848",
  nombre: "Pelula",
  edad: "8",
  especie: "Gato",
  descripcion: "Muy juguetóna, amigable y dormilona.",
  contacto: "12345678",
  estado: "Disponible"
};

const aplicacionInicial={
  IdMascota:"4848",
  nomMascota:"Pelula",
  ci:"9412098",
  nombre:"Andres Zubieta",
  correo:"andres.zubieta@ucb.edu.bo",
  numero:"764242387",
  razon:"Me gustan mucho los gatos amigables y dormilones",
  estado:"Pendiente"

}


function esconderBotones(){
    mostrarFormBtn.style.display = "none";
  mostrarMascotasBtn.style.display = "none";
  mostrarAplicacionesBtn.style.display="none";

}
function mostrarBotones(){
  mostrarFormBtn.style.display = "block";
  mostrarMascotasBtn.style.display = "block";
  mostrarAplicacionesBtn.style.display="block";
}

mascotasGlobales.push(mascotaInicial)
AplicacionesGlobales.push(aplicacionInicial)

const Registrarform = document.querySelector("#mascota-form");
const IdInput = document.querySelector("#id");
const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");
const especieInput = document.querySelector("#especie");
const descripcionInput = document.querySelector("#descripcion");
const contactoInput = document.querySelector("#contacto");

const registroDiv = document.querySelector("#registro-mascotas");

const mostrarFormBtn = document.querySelector("#mostrar-registrar-btn");
const mostrarMascotasBtn = document.querySelector("#mostrar-mascotas-btn");
const mostrarAplicacionesBtn =document.querySelector("#mostrar-aplicaciones-btn")

const busquedaContainer = document.querySelector("#busqueda-container");
const parametroBusquedaInput = document.querySelector("#parametro-busqueda");
const buscarBtn = document.querySelector("#buscar-btn");

const infoMascotaAdoptar =document.querySelector("#info-mascota-adoptar")
const formularioAdopcion =document.querySelector("#adoptar-form")

const ciInput = document.querySelector("#ciAplicante");
  const nomApInput = document.querySelector("#nombreAplicante");
  const correoInput = document.querySelector("#correoAplicante");
  const numeroApInput = document.querySelector("#numeroAplicante");
  const razonInput = document.querySelector("#razonAdopcion");
  const btnRegistroAplicacion = document.querySelector("#registrarAplicacion");
  const divAplicacion = document.querySelector("#aplicacionesDiv");



// Mostrar el formulario al presionar el botón
mostrarFormBtn.addEventListener("click", () => {
  Registrarform.style.display = "block";
  esconderBotones();
  registroDiv.innerHTML=" ";
  busquedaContainer.style.display="none";
  divAplicacion.style.display="none";

});

// Registrar una nueva mascota
Registrarform.addEventListener("submit", (event) => {
  event.preventDefault();

  const id = IdInput.value;
  const nombre = nombreInput.value;
  const edad = edadInput.value;
  const especie = especieInput.value;
  const descripcion = descripcionInput.value;
  const contacto = contactoInput.value;

  const mensaje = registrarMascota(id, nombre, edad, especie, descripcion, contacto, mascotasGlobales);

  registroDiv.style.display = "block";
  registroDiv.innerHTML = `<p>${mensaje}</p>`;

  // Si sale error que se mantenta el formulario
  if (!mensaje.includes("éxito")) {
    Registrarform.style.display = "block";
    esconderBotones();
    registroDiv.innerHTML ="Error: "+mensaje+"<p>"
    return;
  }
  registroDiv.innerHTML = `<p>${mensaje}</p>`;
  Registrarform.reset();
  Registrarform.style.display = "none";
  mostrarBotones();
});


buscarBtn.addEventListener("click", () => {
  const terminoBusqueda = parametroBusquedaInput.value.toLowerCase();

  // Filtramos la lista de mascotas
  const mascotasFiltradas = mascotasGlobales.filter(mascota => {
    const nombre = mascota.nombre.toLowerCase();
    const especie = mascota.especie.toLowerCase();
    // Devuelve true si el término de búsqueda está incluido en el nombre O en la especie
    return nombre.includes(terminoBusqueda) || especie.includes(terminoBusqueda);
  });
  
  // Aqui volvi a usar mostrarMascotas con la lista ya filtrada
  const html = mostrarMascotas(mascotasFiltradas);
  registroDiv.innerHTML = html;
});




// Mostrar todas las mascotas registradas
mostrarMascotasBtn.addEventListener("click", () => {
  const html = mostrarMascotas(mascotasGlobales);
  registroDiv.style.display="block"
  registroDiv.innerHTML = html;
  busquedaContainer.style.display = "block"
  divAplicacion.style.display="none"
});
//si se presiona el boton adoptar
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-adoptar")) {
    const id = e.target.dataset.id;
    const nombreMascota = e.target.dataset.nombre;
    registroDiv.innerHTML=""
    registroDiv.idMascota=id;
    registroDiv.nombreMascota=nombreMascota
    formularioAdopcion.style.display="block";
    infoMascotaAdoptar.innerHTML="Id Mascota: "+registroDiv.idMascota+"<p>                   Nombre Mascota: "+nombreMascota
    esconderBotones();
    busquedaContainer.style.display="none";
    return;

  }
});
btnRegistroAplicacion.addEventListener("click", () => {
  const aplicacion= registrarAplicacion(registroDiv.idMascota,registroDiv.nombreMascota,ciInput.value,nomApInput.value, correoInput.value,numeroApInput.value,razonInput.value,AplicacionesGlobales)
  console.log("hola")
  divAplicacion.style.display="block"
  divAplicacion.innerHTML=aplicacion.mensaje

  if (aplicacion.exito ==false) {
    mostrarFormBtn.style.display = "none";
    mostrarMascotasBtn.style.display = "none";
    divAplicacion.innerHTML=aplicacion.mensaje;
    return;
  }
  mostrarBotones();
  formularioAdopcion.style.display ="none"
  formularioAdopcion.reset();
  
});

mostrarAplicacionesBtn.addEventListener("click",()=>{
  busquedaContainer.style.display="none";
  divAplicacion.innerHTML=mostrarAplicaciones(AplicacionesGlobales);
  divAplicacion.style.display="block"
  registroDiv.style.display="none"

})


document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-aceptar")) {
    
    const idMascota = Number(e.target.dataset.idMascota);
    const index = Number(e.target.dataset.indexAplicacion);

    aceptarAplicacion(idMascota, index, mascotasGlobales, AplicacionesGlobales);

    divAplicacion.style.display="none";
    mostrarBotones();
    busquedaContainer.style.display="none";
  }
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-negar")) {

    const index = Number(e.target.dataset.indexAplicacion);

    negarAplicacion(index, AplicacionesGlobales);

    divAplicacion.style.display="none";
    mostrarBotones();
    busquedaContainer.style.display="none";
  }
});
