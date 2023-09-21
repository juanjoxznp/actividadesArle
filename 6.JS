// Una pizzería “Italiana pizza” es un establecimiento que ofrece comida preparada principalmente a base de pizza, 
// sándwiches y ensaladas. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características 
// (programa básico-simulación):
// a. se muestra al usuario un menú de opciones así: 1. Pizza 2. Sándwiches 3 ensaladas
// b. Dependiendo de la opción seleccionada (producto escogido) se pide la cantidad de porciones.
// • Pizza a 7000 por unidad
// • Sándwich a 5000 unidad
// • Ensalada a 15000 unidad
// c. Se le pide al usuario si desea agregar salsa que vale 3000.
// d. El sistema indica el costo que paga el cliente por su producto.

let pizza=7000;
let sandwich=5000;
let ensalada=15000;
let salsa=3000;
let menu = prompt("¿Que deseas elegir del menú? \n 1. Pizza --- 2. Sándwiches --- 3. Ensaladas")

function pizzeria(){

switch (menu){

    case "1":{

        let cantidad=Number(prompt("Cuantas pizzas deseas llevar?"))
        alert(`Serian ${cantidad} pizzas, cada una a ${pizza}`)

        cantidad*=pizza

        let salsas=prompt("¿Desea agregar salsa, a tan solo $3000? \n 1.Si --- 2. No")

        switch (salsas){

            case "1":{

                alert(`Seria un total de ${cantidad+salsa}, adicionando el valor de la salsa`)


            break    
            } case "2":{

                alert(`Seria un total de ${cantidad}`)

            break    
             }


        }


    break    
    }case "2":{

        let cantidad=Number(prompt("Cuantos sándwiches deseas llevar?"))
        alert(`Serian ${cantidad} sandwiches, cada uno a ${sandwich}`)

        cantidad*=sandwich

        let salsas=prompt("¿Desea agregar salsa, a tan solo $3000? \n 1.Si --- 2. No")

        switch (salsas){

            case "1":{

                alert(`Seria un total de ${cantidad+salsa}, adicionando el valor de la salsa`)


            break    
            } case "2":{

                alert(`Seria un total de ${cantidad}`)

            break    
             }


        }

        


    break   
    }case "3":{

        let cantidad=Number(prompt("Cuantas ensaladas deseas llevar?"))
        alert(`Serian ${cantidad} ensaladas, cada una a ${ensalada}`)

        cantidad*=ensalada

        let salsas=prompt("¿Desea agregar salsa, a tan solo $3000? \n 1.Si --- 2. No")

        switch (salsas){

            case "1":{

                alert(`Seria un total de ${cantidad+salsa}, adicionando el valor de la salsa`)


            break    
            } case "2":{

                alert(`Seria un total de ${cantidad}`)

            break    
             }


        }

        


    break    
    }



}}

pizzeria();