export default function filtrarMascotas(parametro,listaMascotas=[]){

    return listaMascotas.filter(mascota => {
        const nombre = mascota.nombre.toLowerCase();
        const especie = mascota.especie.toLowerCase();
        const estado = mascota.estado.toLowerCase();
        const descripcion =mascota.descripcion.toLowerCase();
        return nombre.includes(parametro) || especie.includes(parametro)||estado.includes(parametro)||descripcion.includes(parametro);
      });


}