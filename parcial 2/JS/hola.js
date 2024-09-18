// Pedimos al usuario que ingrese dos números
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));


let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;


let mayorQue = num1 > num2;
let menorQue = num1 < num2;
let igualQue = num1 === num2;

let mensaje = "Los resultados son:\n" +
              "Suma: " + suma + "\n" +
              "Resta: " + resta + "\n" +
              "Multiplicación: " + multiplicacion + "\n" +
              "División: " + division + "\n" +
              "¿El primer número es mayor que el segundo? " + mayorQue + "\n" +
              "¿El primer número es menor que el segundo? " + menorQue + "\n" +
              "¿Los números son iguales? " + igualQue;

alert(mensaje);

