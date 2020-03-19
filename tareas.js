
const fs = require('fs');
//const chalk = require ('chalk'); 
//console.log (chalk.bold ('holaaa'))
const tareas = {
    archivo: 'tareas.json',
    leer: function (){
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));

    },
    escribirJSON: function (tareita) {
        fs.writeFileSync(this.archivo, JSON.stringify(tareita, null, ' '));
    },
    guardar: function (nuevaTarea) {
        //const contenido = this.leer();
        //contenido.push ({
          //  descripcion: nuevaTarea,
            //"estado": "pendiente"

        //})
        let tareitas = this.leer();
        tareitas.push(nuevaTarea);
        console.log(tareitas);
        //console.log(nuevaTarea);
        this.escribirJSON(tareitas);
        //fs.writeFileSync(this.archivo, nuevaTarea);
        
       
       // return 'la tarea que vamos guardar es:' + nuevaTarea ;
    },
    leerPorEstado(estado) {
        let tareas = this.leer();

        let tareasFiltradas = tareas.filter((tarea) => {
            return tarea.estado == estado;
        });  

        return tareasFiltradas;
    }
}
//module.exports = tareas.leer();

//module.exports = tareas.guardar();
module.exports = tareas;