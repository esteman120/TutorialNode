const {materias, OpcionesIncripcion} = require("./datos");
const fs = require("fs");

const argv = require('yargs')
.usage('Usage: $0 <command> [options]')
.command('inscribir', 'Inscripcion cursos', OpcionesIncripcion,
    ({IdCurso, nombreInteresado, cedula}) => {       
      let busqueda = materias.find(x=> x.idMateria === IdCurso)      
      if (busqueda !== undefined) {
          console.log("==============Información del curso============");
          console.log("   *Código: "+busqueda.idMateria);
          console.log("   *Nombre: "+busqueda.nombreMateria);
          console.log("   *Duración: "+busqueda.duracion);
          console.log("   *Valor: "+busqueda.valor); 
          
          texto = "=============Información del interesado===========" +'\n'+
                  '\n'+
                  "Nombre: "+nombreInteresado +'\n'+
                  "Cédula: "+cedula+'\n'+
                  "=============Información del curso===========" +'\n'+
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

let mostrarMaterias=()=>{
    
    if (!argv.IdCurso) {
        console.log("============Cursos disponibles===================");
        let i =0;
        materias.forEach(items => {
            setTimeout(function(){
                console.log("   *Código: "+items.idMateria);
                console.log("   *Nombre: "+items.nombreMateria);
                console.log("   *Duración: "+items.duracion);
                console.log("   *Valor: "+items.valor);
                console.log("");
                console.log("-----------------");            
            },2000*(i+1)); 
            i++;       
        });  
        console.log("Para matricularse ingrese la palabra inscribir") 
    }      
}

mostrarMaterias();

