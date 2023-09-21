// “Lavan Ya” es un servicio de limpieza en el que los clientes envían sus prendas para que se laven y se planchen 
// en un lugar determinado. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características 
// (programa básico-simulación):
// a. El cliente escoge entre dos servicios: lavado o planchado.
// b. Si es lavado, se solicita el tipo de lavado 1. En seco o 2. Normal
// c. Se solicita la cantidad de prendas.
// d. Se calcula el costo de los servicios teniendo en cuenta la lista de precios:
// • Lavado en seco: 2000 por prenda
// • Lavado normal: 1500 por prenda
// • Planchado: 1800 por prenda
// e. Adicional se cobra un domicilio de 3000 solo si es planchado; para otros servicios es gratis.


let counterPrendas=0;
let seco=2000;
let normal=1500;
let planchado=1800;
let domicilio=3000;
let servicio = prompt("Lavado o Planchado");

function lavanya(){

switch (servicio) {
    case "Lavado": {

        let lavado= prompt("1. En seco 2. Normal")

        switch(lavado){

            case "1":{

                let cantidadPrendas=Number(prompt("¿Cuantas prendas son?"))

                cantidadPrendas*=seco

               

                let domigratis=prompt("Deseas usar el servicio de domicilio? \n 1. Si  ---- 2. No")

                switch (domigratis){

                    case "1":{

                        alert(`El costo de el servicio es de ${cantidadPrendas} y el domicilio es gratis`)


                    break
                    }case "2":{

                        alert(`El costo de el servicio es de ${cantidadPrendas}, sin utilizar el servicio de domicilio`)


                    break   
                    }


                }

                break

            }case "2":{

                let cantidadPrendas=Number(prompt("¿Cuantas prendas son?"))

                cantidadPrendas*=normal

                let domigratis=prompt("Deseas usar el servicio de domicilio? \n 1. Si  ---- 2. No")

                switch (domigratis){

                    case "1":{

                        alert(`El costo de el servicio es de ${cantidadPrendas} y el domicilio es gratis`)

                     break   
                    }case "2":{

                        alert(`El costo de el servicio es de ${cantidadPrendas}, sin utilizar el servicio de domicilio`)
                    break    
                    }


                }

               
                

                break
            }
            
        }
  
      break;
    }case "Planchado":{

        let cantidadPrendas=Number(prompt("¿Cuantas prendas son?"))

                cantidadPrendas*=planchado

                alert(`El costo de el servicio es de ${cantidadPrendas}`)

            let domi=prompt("Deseas llevarlo a domicilio? \n 1.SI 2. NO")

            switch(domi){

                case "1":{

                    alert(`En total serian ${cantidadPrendas+domicilio} con el domicilio incluido :)`)

                break    
                }case "2":{

                    alert(`Es con mucho gusto, vuelva pronto :)`)

                }

            }

        break
    }

} }

lavanya();