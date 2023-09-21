// Los sticker son etiquetas adhesivas diseñadas para ser pegadas en objetos, como lápices, libretas, cuadernos, 
// pizarras, muebles, etc. Se utilizan para decorar y personalizar los productos de una manera barata y sencilla.
// Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básicosimulación):
// a. Se solicita al usuario el tamaño del stikers, pequeño o grande.
// • Costo pequeño es de 4000 y costo del grande 6000
// b. Se pide al usuario la cantidad de estikers teniendo en cuenta que solo se pueden enviar mínimo 10; Sino 
// debe indicarse al usuario un numero correcto.
// c. El sistema debe arrojar cuanto es el costo total para pagar 


let pequeño=4000;
let grande=6000;
let tamaño = prompt("Cual es el tamaño del sticker que desea? \n 1. Pequeño --- 2. Grande")

function stickers(){

switch (tamaño){

    case "1":{
        
        let cantidad=9;
        
        while (cantidad<10){

        let cantidad=Number(prompt("¿Cuantos stickers desea comprar?"))


        if(cantidad>=10){
            alert(`Haz comprado ${cantidad} stickers`)

        let total=cantidad*=pequeño

        alert(`Total a pagar $${total}`)

        break    
        } else if (cantidad<10){

           alert("Vendemos mínimo 10 stickers") 

         
        }}
        break  
    }case "2":{

        let cantidad=9;
        
        while (cantidad<10){

        let cantidad=Number(prompt("¿Cuantos stickers desea comprar?"))

        if(cantidad>=10){
            alert(`Haz comprado ${cantidad} stickers`)

        let total=cantidad*=grande

        alert(`Total a pagar $${total}`)

        break    
        } else if (cantidad<10){

           alert("Vendemos mínimo 10 stickers") 

        }}


    break    
    }


}}

stickers();