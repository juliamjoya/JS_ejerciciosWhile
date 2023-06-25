/*** 
1. Crea un programa que pregunte al usuario un número. Mostrar los números que son multiplos de 5 desde 1 hasta el número introducido por el usuario
***/

let numeroUsuario = parseInt(prompt("Digite un número"));
let repeticiones = 0;

while (repeticiones <= numeroUsuario) {
    if(repeticiones % 5 === 0){
        console.log("El número "+repeticiones+" es multiplo de 5");
    }
    repeticiones++;
}

/*** 
2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje "¡Lotería!" solo al mostrar los números indicados por el usuario
***/

let numUno = parseInt(prompt("Digite un número entre 1 y 50"));
let numDos = parseInt(prompt("Digite otro número entre 1 y 50"));
let ciclos = 1;

while (ciclos < 51) {
    console.log(ciclos);

    if(numUno == ciclos){
        console.log("¡Lotería!");
    }else if(numDos == ciclos){
        console.log("¡Lotería!");
    }
    ciclos++;
}

/***
3. Crea un programa que solicite al usuario números, si lo que este introduce es un numero guardalo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
***/

let listaNumeros = [];

while (true) {
    let numUsuario = parseInt(prompt("Digite un número... Si desea fianlizar la ejecucion, digite 0."));
    if(numUsuario === 0){
        break;
    }

    if (!isNaN(numUsuario)) {
        listaNumeros.push(numUsuario);
    }
}

//Muestra los numeros digitados y capturados en el array
console.log("Números digitados:", listaNumeros);

/*** 
4. Crea un programa que solicite al usuario letras o palabras, si es asi guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminarde capturar, mostrar en pantalla la concatenacion de todas las palabras capturadas.
***/

let textoGuardado = "";

while (true) {
    let textoUsuario = prompt("Digite letras o palabras");
    if(textoUsuario === ""){
        break;
    }else{
        textoGuardado += textoUsuario;
    }
}

console.log("Las palabras o letras digitadas fueron: "+textoGuardado);

/***
5. Crea un programa que solicite al usuario un dia de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada dia de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro dia. En caso de que el dia introducido sea domingo mostrar al usuario el mensaje "Ve a descansar" y terminar la captura de la informacion.
***/

while (true) {
    let diaSemana = prompt("Digite un dia de la semana, Ej: lunes, martes, miercoles, etc...");

    if(diaSemana.toLowerCase() === "lunes"){
        console.log("Es lunes, apenas empieza la semana");
    }else if(diaSemana.toLowerCase() === "martes"){
        console.log("¿Apenas es martes? :(");
    }else if(diaSemana.toLowerCase() === "miercoles"){
        console.log("!Oh Miercoles¡, que semana tan larga");
    }else if(diaSemana.toLowerCase() === "jueves"){
        console.log("Jueves eres como un viernes pequeñito");
    }else if(diaSemana.toLowerCase() === "viernes"){
        console.log("Ohhh si, por fin viernes");
    }else if(diaSemana.toLowerCase() === "sabado"){
        console.log("Bienvenido seas fin de semana :)");
    }else if(diaSemana.toLowerCase() === "domingo"){
        console.log("Ve a descansar");
        break;
    }
}