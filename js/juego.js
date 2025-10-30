/*
Variables. 
Condicionales.
Ciclos.
Funciones.
Arrays.
Entrada y Salida de Datos.
*/



let javaElement;
let userElement;
const elementos = ["Piedra", "Papel", "Tijera"];
const computadoraElemento = elementos[javaElement];
const usuarioElemento = elementos[userElement];
let userResult = 0;
let javaResult = 0;

alert("Bienvenido al juego de Piedra, Papel o Tijera");


for (let i = 0; i < 3; i++) {
    userElement = prompt("Elija una opción: \n 0: Piedra \n 1: Papel \n 2: Tijera\n");
    javaElement = [Math.floor(Math.random()*3)];
    console.log("Elección de la computadora: " + elementos[javaElement]);
    console.log("Elección del usuario: " + elementos[userElement]);
    if (userElement == javaElement) {
        console.log("Empataste conmigo 😁");
    } 
    
    else if ((userElement == 0 && javaElement == 2) || (userElement == 1 && javaElement == 0) || (userElement == 2 && javaElement == 1)) {
        console.log("La pucha che! me ganaste! 😥");
        userResult ++;
    } 
    
    else if ((userElement == 0 && javaElement == 1) || (userElement == 1 && javaElement == 2) || (userElement == 2 && javaElement == 0) ) {
        console.log("juaaa te pinte la cara, perdiste! 😂🤣");
        javaResult ++;
    }
    
    else{
        console.log("¿Que sos QA ahora?? 👮🏼‍♂️👮🏼‍♀️ \n pone una de las opciones elegida y no jorobés tanto! 🕵🏼‍♀️");
    };
};

console.log("Resultados finales: \n Usuario: " + userResult + " \n Computadora: " + javaResult);

if(userResult > javaResult){
    alert("El ganador es el Usuario! (ganaste de pedo) \nGracias por jugar conmigo! \n Vuelve pronto! 😊");
} 
else if(javaResult > userResult){
    alert("El ganador es la Computadora! 😎 \nGracias por jugar conmigo! \n Vuelve pronto! 😊");
} 
else if(userResult == javaResult){
    alert("Parece que empatamos che! (y como soy la compu podría sumar un punto 😏) \nGracias por jugar conmigo! \n Vuelve a intentarlo! 😊");
}
else{
    alert("hubo un error, lo siento. \nGracias por jugar conmigo! \n Vuelve a intentarlo! 😊");
}



