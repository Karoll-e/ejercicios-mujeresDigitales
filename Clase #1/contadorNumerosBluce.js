// Crear un programa que imprima los numeros del 1 al 10, y luego indique cuantos de esos numeros son mayores que 5.

let contadorMayorCinco = 0;
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i > 5) {
        contadorNumeros++
    }
}
console.log(`la cantidad de numeros mayores a 5 son: ${contadorNumeros} `);