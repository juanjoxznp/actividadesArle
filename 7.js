// La biblioteca municipal de Armenia, necesita un sistema de Gestión de multas. Hacer un programa en JavaScript 
// que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Se pregunta al usuario si es devolución o perdida.
// b. Se le pide al usuario de la biblioteca que indique la cantidad de días de retraso.
// c. La cantidad de libros prestados o revistas
// • Revistas 500 pesos día.
// • Libro 600 pesos día.
// d. Si es perdida, debe de pagar 10000 por ejemplar

let perdida=10000;
let revista=500;
let libro=600;
let pregunta = prompt("Señor usuario, es devolución o perdida? \n 1. Devolucion --- 2. Perdida")

function biblioteca(){


switch (pregunta){

    case "1":{
       
    let cantidad= prompt("Ha prestado libros o revistas? \n 1. Libro --- 2. Revista")

    switch (cantidad){

        case "1":{

            let cantidadLibros= Number(prompt("Cuantos libros pediste prestado?"))

            alert(`Entiendo, has prestado ${cantidadLibros} libros`)

            cantidadLibros*=libro

            let retraso = Number(prompt("¿Cuantos dias de retraso has tenido?"))

            cantidadLibros*=retraso

            alert(`Cada libro por dia cuesta $${libro}, como has tenido ${retraso} dias de retraso, debes pagar un total de $${cantidadLibros}`)



        break    
        }case "2":{

            let cantidadRevistas= Number(prompt("Cuantas revistas pediste prestado?"))

            alert(`Entiendo, has prestado ${cantidadRevistas} revistas`)

            cantidadRevistas*=revista

            let retraso = Number(prompt("¿Cuantos dias de retraso has tenido?"))

            cantidadRevistas*=retraso

            alert(`Cada revista por dia cuesta $${revista}, como has tenido ${retraso} dias de retraso, debes pagar un total de $${cantidadRevistas}`)

        break    
        }


    }
   



     break   
    }case "2":{

        let cantidad= prompt("Ha prestado libros o revistas? \n 1. Libro --- 2. Revista")

        switch (cantidad){

            case "1":{

            let cantidadLibros= Number(prompt("Cuantos libros pediste prestado?"))
            
            cantidadLibros*=perdida
            alert(`Debes pagar ${cantidadLibros} por la perdida`)
            break
            } case "2":{

                let cantidadRevistas= Number(prompt("Cuantas revistas pediste prestado?"))
            
                cantidadRevistas*=perdida
                alert(`Debes pagar ${cantidadRevistas} por la perdida`)                

            break    
            }
        }
        break   
       }


}}

biblioteca();