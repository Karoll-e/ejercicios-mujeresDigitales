/*Crea una variable hora y usa condicionales para mostrar:
- "Buenos días" si la hora está entre 6 y 12.
- "Buenas tardes" si la hora está entre 12 y 18.
- "Buenas noches" si la hora está entre 18 y 6.
*/

let hora = 2;
if (hora >= 6 && hora <= 12) {
    console.log("Buenos días");
} else if (hora > 12 && hora <= 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}