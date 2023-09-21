// Un examen de conocimientos es una prueba diseñada para evaluar el conocimiento y comprensión de un tema 
// o disciplina específica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características 
// (programa básico-simulación):
// a. Se debe presentar 5 preguntas (sea de selección múltiple o verdadero-falso.
// b. Cada pregunta debe ser evaluada si fue correcta o no su respuesta.
// c. Si la opción es correcta se suma 10 puntos por cada pregunta.
// d. Se debe mostrar los resultados del examen.


let counterPoints=0;
let question=0;

alert("⚽ BIENVENID@ A LA TRIVIA SOBRE CONOCIMIENTO DE FÚTBOL ⚽");
alert("COMENCEMOS! 🕹")
alert("VAMOS CON LA PRIMER PREGUNTA 💡")

let question1="z";

function trivia(){

while (question1!=="a" || question1!=="b" || question1!=="c" || question1!=="d" || question1!=="e"){

let question1=prompt("¿Cuántos jugadores tiene un equipo de fútbol en el campo al comienzo de un partido?\n\n(a) 7 jugadores\n(b) 9 jugadores\n(c) 11 jugadores\n(d) 13 jugadores\n(e) 5 jugadores ");


if(question1==="c"){

    alert("RESPUESTA CORRECTA\nObtienes 10 puntos :)");
    counterPoints+=10
    question++
break
} else if(question1!=="a" && question1!=="b" && question1!=="c" && question1!=="d" && question1!=="e"){

    alert("TU RESPUESTA ES INVALIDA");
   
}else if(question1!=="c"){

    alert("RESPUESTA INCORRECTA\nObtienes 0 puntos");
break    
}}
alert("SEGUIMOS CON LA SEGUNDA PREGUNTA 💡")

let question2="z";

while (question2!=="a" || question2!=="b" || question2!=="c" || question2!=="d" || question2!=="e"){

let question2=prompt("¿Cuánto tiempo dura cada mitad de un partido de fútbol profesional, sin contar el tiempo de descuento?\n\n(a) 60 minutos\n(b) 45 minutos\n(c) 50 minutos\n(d) 40 minutos\n(e) 47 minutos ");

if(question2==="b"){

    alert("RESPUESTA CORRECTA\nObtienes 10 puntos :)");
    counterPoints+=10
    question++
break
} else if(question2!=="a" && question2!=="b" && question2!=="c" && question2!=="d" && question2!=="e" ){

    alert("TU RESPUESTA ES INVALIDA");
}else if(question2!=="b"){

    alert("RESPUESTA INCORRECTA\nObtienes 0 puntos");
 break   
}}

alert("SEGUIMOS CON LA TERCER PREGUNTA 💡")

let question3="z";

while (question3!=="a" || question3!=="b" || question3!=="c" || question3!=="d" || question3!=="e"){

let question3=prompt("¿Cómo se llama el evento deportivo en el que participan selecciones nacionales compitiendo por el título mundial?\n\n(a) UEFA Champions League\n(b) Copa del mundo\n(c) Copa America\n(d) Copa Libertadores\n(e) Liga BetPlay Dimayor");

if(question3==="b"){

    alert("RESPUESTA CORRECTA\nObtienes 10 puntos :)");
    counterPoints+=10
    question++
break
} else if(question3!=="a" && question3!=="b" && question3!=="c" && question3!=="d" && question3!=="e" ){

    alert("TU RESPUESTA ES INVALIDA");
}else if(question3!=="b"){

    alert("RESPUESTA INCORRECTA\nObtienes 0 puntos");
break
}}

alert("SEGUIMOS CON LA CUARTA PREGUNTA 💡")

let question4="z";

while (question4!=="a" || question4!=="b" || question4!=="c" || question4!=="d" || question4!=="e"){

let question4=prompt("¿Qué club de fútbol es conocido como Los Merengues?\n\n(a) Real Madrid\n(b) F.C Barcelona\n(c) Deportes Quindio\n(d) Manchester United\n(e) Juventus");

if(question4==="a"){

    alert("RESPUESTA CORRECTA\nObtienes 10 puntos :)");
    counterPoints+=10
    question++
break
} else if(question4!=="a" && question4!=="b" && question4!=="c" && question4!=="d" && question4!=="e" ){

    alert("TU RESPUESTA ES INVALIDA");
}else if(question4!=="a"){

    alert("RESPUESTA INCORRECTA\nObtienes 0 puntos");
    break
}}

alert("ÚLTIMA PREGUNTA 💡")

let question5="z";

while (question5!=="a" || question5!=="b" || question5!=="c" || question5!=="d" || question5!=="e"){

let question5=prompt("¿Cuál es el nombre del jugador que se posiciona en la portería para protegerla y evitar que entre el balón?\n\n(a) Defensa\n(b) Volante\n(c) Delantero\n(d) Arbitro\n(e) Arquero");

if(question5==="e"){

    alert("RESPUESTA CORRECTA\nObtienes 10 puntos :)");
    counterPoints+=10
    question++
break
} else if(question5!=="a" && question5!=="b" && question5!=="c" && question5!=="d" && question5!=="e" ){

    alert("TU RESPUESTA ES INVALIDA");
}else if(question5!=="e"){

    alert("RESPUESTA INCORRECTA\nObtienes 0 puntos");
break    
}}

alert("HAZ TERMINADO EL CUESTIONARIO\n⚽ AHORA MIREMOS QUE TANTO SABES DE FÚTBOL ⚽")
alert(`Haz respondido ${question} preguntas correctas, tienes un puntaje de ${counterPoints}`);
}

trivia();