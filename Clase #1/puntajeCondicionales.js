/* Crea una variable "puntaje" y usa condicionales para mostrar:
- "Excelente" si el puntaje es mayor o igual a 90
- "Bueno" si el puntaje esta entre 70 y  89
- "Necesitas mejorar" si el puntaje es menor de70
*/

let puntaje = 75

if (puntaje >= 90) {
    console.log("Excelente");
}
else if (puntaje >= 70 && puntaje <= 89) {
    console.log("Bueno");
}
else if (puntaje < 70) {
    console.log("Necesitas mejorar");
}
else {
    console.log("Ingresa puntaje valido");
}