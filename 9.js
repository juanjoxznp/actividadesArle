// Un sistema de voto electrónico es una aplicación informática diseñada para permitir a los votantes emitir sus 
// votos de forma electrónica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o 
// características (programa básico-simulación):
// a. La cantidad de votantes son 10 personas
// b. Hay dos opciones de votos: 1. Ana Maria Suarez 2. Diego Acero
// c. El sistema debe ir sumando los votos de cada candidato.
// d. El sistema debe arrojar el ganador y perdedor de la votación

let counterAna=0;
let counterDiego=0;
let counterRound=0;

function votantes(){

while(counterRound<=9){

let candidato=prompt("¿Por quien quieres votar? \n 1. Ana Maria Suarez --- 2. Diego Acero");

switch (candidato){

    case "1":{

        counterAna++
        counterRound++

    break    
    } case "2":{

        counterDiego++
        counterRound++

    break    
    }


} alert(`Los votos para Ana Maria Suarez son: ${counterAna} \n Los votos para Diego Acero son: ${counterDiego}`)
} if(counterAna>counterDiego){

    alert(`El candidato ganador ha sido Ana Maria Suarez con ${counterAna} votos :) \nEn esta ocasión Diego Acero ha perdido, ha obtenido ${counterDiego} votos`)


}else if(counterAna==counterDiego){

    alert(`En estas votaciones ha habido un empate, ambos candidatos han obtenido ${counterAna} `)


}

else{

    alert(`El candidato ganador ha sido Diego Acero con ${counterDiego} votos :) \nEn esta ocasión Ana Maria Suarez ha perdido, ha obtenido ${counterAna} votos`)


}}

votantes();


