// Ejemplo 2 punteros

// function encontrarParDeNumeros(arreglo, target){
//     // definir punteros
//     let izquierda = 0;
//     let derecha = arreglo.length - 1;

//     while(izquierda < derecha){

//         let suma = arreglo[izquierda] + arreglo[derecha];

//         if(suma === target){
//             console.log(`Encontrado: ${arreglo[izquierda]} + ${arreglo[derecha]} = ${target}`);
//             return true;
//         }

//         if(suma < target){
//             izquierda++;
//         }
//         else{
//             derecha--;
//         }
//     }

    // console.log('No se encontro el target');
    // return false;

// }


// let arregloParaSumar = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// encontrarParDeNumeros(arregloParaSumar, 1000)


// 2 punteros con strings

function esPalindromo(texto) {
    const limpio = texto.toLowerCase().replace(/\s/g, '');

    let izquierda = 0;
    let derecha = limpio.length - 1;

    while (izquierda < derecha) {
        if (limpio[izquierda] !== limpio[derecha]) {
            console.log(`"${texto}" no es un palíndromo.`);
            return false;
        }
        izquierda++;
        derecha--;
    }

    console.log(`"${texto}" es un palíndromo.`);
    return true;
}

esPalindromo('anita lava la tina');     // Palindroma
esPalindromo('Anita Lava La Tina');     // Palindroma
esPalindromo('Hola mundo');             // No es palindroma
esPalindromo('amo la paloma');          // Palindroma
