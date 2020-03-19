/*
let sumar = (numero1, numero2) => numero1 + numero2; 
let restar = (numero1, numero2) => numero1 - numero2; 
let multiplicarr = (numero1, numero2) => numero1 * numero2; 
let dividir = (numero1, numero2) => numero1 / numero2; 

let calculadora = (numero1, numero2, operacion) => operacion (numero1, numero2);
console.log (calculadora (8,4, dividir));
*/

//let doble = numero => numero *2;
//let triple = numero => numero *3;
//let apply = (numero, operacion) => operacion (numero);
/*
let objeto= {
    nombre: 'Jimena',
    edad: 32,
}
console.log (JSON.stringify(objeto))
*/


//const tareas = require ('./tareas.json')

//const tareas = fs.readFilesSync('tareas.json', 'utf-8');
//console.log (tareas.leer());
//exporto
const tareas = require ('./tareas.js');
const accion = process.argv[2];

switch (accion){
    case 'listar':
        const tareasArray= tareas;
       // for comun 
      //  for (let i = 0; i < tareasArray.length; i++) {
        //    console.log (i + 1 + '-' + tareasArray[i].descripcion + ' - Estado: '+ tareasArray[i].estado );

        //}

        //console.log('el usuario quiere listar'); no descomentar

        tareasArray.forEach((tarea,index) => {
            console.log (index +1 + " - " + tarea.descripcion + "- Estado: " + tarea.estado )
        });

    break;


    case 'agregar':     
        //const resultadoGuardar  = tareas.guardar(process.argv[3]);
        //console.log (resultadoGuardar);

        let titulo = process.argv[3];
        let tarea = {
            titulo: titulo,
            estado: 'pendiente'
        }
        tareas.guardar(tarea);
        
        //archivoTareas.guardarTarea(tarea);
        console.log(tarea.titulo + ' -> ' + tarea.estado);


     break;   
     case 'filtrar':

        let estado = process.argv[3];
               
        let filtradas = tareas.leerPorEstado(estado);
        
        filtradas.forEach((tarea) => {
            //console.log(tarea.titulo)
            
        });
        console.log(filtradas)
        break;

    case undefined:
        console.log ('accion desconocida');
    break;
    default:
        console.log('no es una accion valida');
        break;
}

