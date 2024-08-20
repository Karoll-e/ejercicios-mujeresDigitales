/*
Ejercicio 1:​
- Crea un arreglo llamado colores con al menos 4 colores.​
- Imprime en la consola el primer y el último color del arreglo.​

Ejercicio 2: ​
- Agregar otro color al arreglo.​
- Elimina el primer color ​
- Muestra cuántos colores hay en el arreglo​
*/

let colors = ["Azul", "Blanco", "Rosa", "Violeta"]

console.log(`Primer color: ${colors[0]}`);
console.log(`Ultimo color: ${colors[3]}`);

colors.push("Negro")
colors.shift(0)
console.log(colors)

console.log(`Numero total de colores: ${colors.length}`)

