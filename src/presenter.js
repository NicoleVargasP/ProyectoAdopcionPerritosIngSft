import registrarMascota from "./registrarMascota";
import mostrarMascotas from "./mostrarMascotas";
import registrarAplicacion from "./registrarAplicacion";
import mostrarAplicaciones from "./mostrarAplicaciones";
import { aceptarAplicacion, negarAplicacion } from "./respuestaAplicacion";
import filtrarMascotas from "./filtrarMascotas";

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
    btnMostrarFormMascotas.style.display = "none";
  btnMostrarListaMascotas.style.display = "none";
  btnMostrarListaAplicaciones.style.display="none";

}
function mostrarBotones(){
  btnMostrarFormMascotas.style.display = "block";
  btnMostrarListaMascotas.style.display = "block";
  btnMostrarListaAplicaciones.style.display="block";
}

mascotasGlobales.push(mascotaInicial)
AplicacionesGlobales.push(aplicacionInicial)

const formRegistrarMascota = document.querySelector("#mascota-form");
const inputIdMascota = document.querySelector("#id");
const inputNombreMascota = document.querySelector("#nombre");
const inputEdadMascota = document.querySelector("#edad");
const inputEspecieMascota = document.querySelector("#especie");
const inputDescripcionMascota = document.querySelector("#descripcion");
const inputContactoMascota = document.querySelector("#contacto");

const divRegistroMascotas = document.querySelector("#registro-mascotas");

const btnMostrarFormMascotas = document.querySelector("#mostrar-registrar-btn");
const btnMostrarListaMascotas = document.querySelector("#mostrar-mascotas-btn");
const btnMostrarListaAplicaciones =document.querySelector("#mostrar-aplicaciones-btn")

const containerBuscadorMascotas = document.querySelector("#busqueda-container");
const inputParametroBusqueda = document.querySelector("#parametro-busqueda");
const btnBuscarMascota = document.querySelector("#buscar-btn");

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
btnMostrarFormMascotas.addEventListener("click", () => {
  formRegistrarMascota.style.display = "block";
  esconderBotones();
  divRegistroMascotas.innerHTML=" ";
  containerBuscadorMascotas.style.display="none";
  divAplicacion.style.display="none";

});

// Registrar una nueva mascota
formRegistrarMascota.addEventListener("submit", (event) => {
  event.preventDefault();

  const id = inputIdMascota.value;
  const nombre = inputNombreMascota.value;
  const edad = inputEdadMascota.value;
  const especie = inputEspecieMascota.value;
  const descripcion = inputDescripcionMascota.value;
  const contacto = inputContactoMascota.value;

  const mensaje = registrarMascota(id, nombre, edad, especie, descripcion, contacto, mascotasGlobales);

  divRegistroMascotas.style.display = "block";
  divRegistroMascotas.innerHTML = `<p>${mensaje}</p>`;

  // Si sale error que se mantenta el formulario
  if (!mensaje.includes("éxito")) {
    formRegistrarMascota.style.display = "block";
    esconderBotones();
    divRegistroMascotas.innerHTML ="Error: "+mensaje+"<p>"
    return;
  }
  divRegistroMascotas.innerHTML = `<p>${mensaje}</p>`;
  formRegistrarMascota.reset();
  formRegistrarMascota.style.display = "none";
  mostrarBotones();
});


btnBuscarMascota.addEventListener("click", () => {
  const terminoBusqueda = inputParametroBusqueda.value.toLowerCase();

  // Filtramos la lista de mascotas
  const mascotasFiltradas = filtrarMascotas(terminoBusqueda,mascotasGlobales);
  const html = mostrarMascotas(mascotasFiltradas);
  divRegistroMascotas.innerHTML = html;
});




// Mostrar todas las mascotas registradas
btnMostrarListaMascotas.addEventListener("click", () => {
  const html = mostrarMascotas(mascotasGlobales);
  divRegistroMascotas.style.display="block"
  divRegistroMascotas.innerHTML = html;
  containerBuscadorMascotas.style.display = "block"
  divAplicacion.style.display="none"
});
//si se presiona el boton adoptar
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-adoptar")) {
    const id = e.target.dataset.id;
    const nombreMascota = e.target.dataset.nombre;
    divRegistroMascotas.innerHTML=""
    divRegistroMascotas.idMascota=id;
    divRegistroMascotas.nombreMascota=nombreMascota
    formularioAdopcion.style.display="block";
    infoMascotaAdoptar.innerHTML="Id Mascota: "+divRegistroMascotas.idMascota+"<p>                   Nombre Mascota: "+nombreMascota
    esconderBotones();
    containerBuscadorMascotas.style.display="none";
    return;

  }
});
btnRegistroAplicacion.addEventListener("click", () => {
  const aplicacion= registrarAplicacion(divRegistroMascotas.idMascota,divRegistroMascotas.nombreMascota,ciInput.value,nomApInput.value, correoInput.value,numeroApInput.value,razonInput.value,AplicacionesGlobales)
  console.log("hola")
  divAplicacion.style.display="block"
  divAplicacion.innerHTML=aplicacion.mensaje

  if (aplicacion.exito ==false) {
    esconderBotones();
    divAplicacion.innerHTML=aplicacion.mensaje;
    return;
  }
  mostrarBotones();
  formularioAdopcion.style.display ="none"
  formularioAdopcion.reset();
  
});

btnMostrarListaAplicaciones.addEventListener("click",()=>{
  containerBuscadorMascotas.style.display="none";
  divAplicacion.innerHTML=mostrarAplicaciones(AplicacionesGlobales);
  divAplicacion.style.display="block"
  divRegistroMascotas.style.display="none"

})


document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-aceptar")) {
    console.log("errror?")
    const idMascota = Number(e.target.dataset.idMascota);
    const index = Number(e.target.dataset.indexAplicacion);

    aceptarAplicacion(idMascota, index, mascotasGlobales, AplicacionesGlobales);

    divAplicacion.style.display="none";
    mostrarBotones();
    containerBuscadorMascotas.style.display="none";
  }
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-negar")) {

    const index = Number(e.target.dataset.indexAplicacion);

    negarAplicacion(index, AplicacionesGlobales);

    divAplicacion.style.display="none";
    mostrarBotones();
    containerBuscadorMascotas.style.display="none";
  }
});
