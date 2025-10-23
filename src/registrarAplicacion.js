export default function registrarAplicacion(IdMascota, nomMascota, ci, nombre, correo,numero,razon){
    if(!razon){
        razon="Sin Razon";
    }
    
    if(!IdMascota||!nomMascota||!ci||!nombre||!correo||!numero){
        return "Ingrese todos los parametros requeridos porfavor"
    }
    return "Se registró la aplicacion con éxito" +
    "<p>Id Mascota: "+IdMascota+"</p>"+
    "<p>Nombre Mascota: "+nomMascota+"</p>"+
        "<p>Ci: "+ci+"</p>"+
        "<p>Nombre: "+nombre+"</p>"+
        "<p>Correo: " +correo+"</p>"+
        "<p>Numero: " +numero+"</p>"+
        "<p>Razon: "+razon+"</p>"

}