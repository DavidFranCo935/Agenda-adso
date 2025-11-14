const nombre = "Carolina";
const ficha = 3150990;
const notas = [3.5, 2.0, 2.8];

const promedio = notas.reduce((a, b) => a + b, 0) / notas.length;

console.log("SISTEMA DE NOTAS SENA");
console.log("Nombre: " + nombre);
console.log("Ficha: " + ficha);
console.log("Notas: " + notas.join(", "));
console.log("Promedio: " + promedio);

console.log("Estado: " + (promedio >= 3.5 ? "Aprobado" :"Reprobado"));