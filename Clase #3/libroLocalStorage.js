// 1. Crear un objeto que represente un libro
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967
  };

// 2. Convertir el objeto a una cadena JSON y guardarlo en Local Storage
let libroJSON = JSON.stringify(libro)
localStorage.setItem('miLibro', libroJSON);

// 3. Recuperar el objeto del Local Storage y mostrarlo en la consola
let libroRecuperado = localStorage.getItem("miLibro")
const libroObjecto = JSON.parse(libroRecuperado);
console.log(libroObjecto);