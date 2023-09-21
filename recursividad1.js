class Atencion {
  constructor(tipo, nombreUsuario, identificacion, rol) {
    this.tipo = tipo;
    this.nombreUsuario = nombreUsuario;
    this.identificacion = identificacion;
    this.rol = rol;
  }
}

const persona1 = new Atencion("oficina", "Juanjo", 10, "estudiante");
const persona2 = new Atencion("oficina", "Sebas", 11, "docente");
const persona3 = new Atencion("oficina", "Daniel", 3, "docente");
const persona4 = new Atencion("llamada", "Maria", 1, "estudiante");

let lista = [];
lista.push(persona1, persona2, persona3, persona4);
contadorTransferencias = 0;

let tras = (i) => {
  // contador
  if (lista[i].tipo == "oficina") {
    lista[i].tipo = "llamada";
  } else {
    lista[i].tipo = "oficina";
  }
  contadorTransferencias++;
};
tras(2);
tras(3);

let contarP = lista.filter((x) => x.tipo == "oficina");
let llamada = lista.filter((x) => x.tipo == "llamada");
console.log("Atención de usuarios en oficina " + contarP.length);
console.log("Atención de usuarios en llamada " + llamada.length);
console.log("Transferencias realizadas " + contadorTransferencias);
let contarEstudiante = lista.filter((x) => x.rol == "estudiante");
let contarDocente = lista.filter((x) => x.rol == "docente");

console.log("Estudiantes atendidos " + contarEstudiante.length);
console.log("Docentes atendidos " + contarDocente.length);
