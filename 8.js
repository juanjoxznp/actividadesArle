// Para verificar si un triángulo es equilátero, se deben comprobar que los tres lados del triángulo tienen la misma 
// longitud. 
// a. Pedir al usuario los lados y determinar si es equilátero o no



let lado1=-5;
let lado2=-5;
let lado3=-5;

alert("Vamos a verificar si el siguiente triangulo es equilatero")
alert("Comencemos!")

function triangulo(){

while(lado1<0){

let lado1=Number(prompt("Dame la longitud del primer lado"));
let lado2=Number(prompt("Dame la longitud del segundo lado"));
let lado3=Number(prompt("Dame la longitud del tercer lado"));


if(lado1==lado2 && lado1==lado3){

    alert("Efectivamente el triangulo es equilatero :)")

    break

} else if (lado1<0 || lado2<0 || lado3<0){

    alert("Valores invalidos")

}

else{

    alert("El triangulo no es equilatero :c")

    break

}
}}
triangulo();
