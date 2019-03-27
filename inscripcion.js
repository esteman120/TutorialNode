const argv = require('yargs');
const {materias, OpcionesIncripcion} = require("./Cursos");
const fs = require("fs");

console.log(argv._[0]);
argv
.usage('Usage: $0 <command> [options]')
.command('inscribir', 'Inscripcion cursos', OpcionesIncripcion,
    ({IdCurso, nombreInteresado, cedula}) => {       
      let busqueda = materias.find(x=> x.idMateria === IdCurso)
      console.log(busqueda);
      if (busqueda !== undefined) {
          console.log("==============Información del curso============");
          console.log("   *Código: "+busqueda.idMateria);
          console.log("   *Nombre: "+busqueda.nombreMateria);
          console.log("   *Duración: "+busqueda.duracion);
          console.log("   *Valor: "+busqueda.valor);   
          
          // texto = "el nombre del estudiante es: "+ nombre + '\n' +
          // "ha tenido el promedio de ";
          texto = "=============Información del interesado===========" +'\n'+
                  '\n'+
                  "Nombre: "+nombreInteresado +'\n'+
                  "Cédula: "+cedula+'\n'+
                  "=============Información del interesado===========" +'\n'+
                  '\n'+
                  "Código: "+busqueda.idMateria +'\n'+
                  "   *Nombre: "+busqueda.nombreMateria +'\n'+
                  "   *Duración: "+busqueda.duracion +'\n'+
                  "   *Valor: "+busqueda.valor


          fs.writeFile('Informacion.txt', texto, (error)=>{
            if (error) throw (error);
            console.log('se ha creado el archivo');
        })
      }
      else{
        console.error("El id no se encontro");
      }
    }
 ) 
.argv




// .option('IdCurso', {
        //     demand: true,
        //     alias: 'Id'
        // })
        // .option('nombreInteresado', {
        //     demand: true,
        //     alias: 'n'
        // })
        // .option('cedula', {
        //     demand: true,
        //     alias: 'c'
        // })