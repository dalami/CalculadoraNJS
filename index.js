
const express = require('express')
const app = express()

const readline = require("readline");
const sumar = require('./funcion')
const restar=require('./funcionRestar')
const multiplicar = require('./funcionMultiplicar')
const dividir = require('./funcionDividir')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

 function calculadora() {
  rl.question("Ingrese la operación que desea realizar (sumar, restar, multiplicar, dividir): ", (operacion) => {
    
    if (operacion === "sumar" || operacion === "restar" || operacion === "multiplicar" || operacion === "dividir") {
      rl.question("Ingrese el primer número: ", (aStr) => {
        const a = Number(aStr);
        rl.question("Ingrese el segundo número: ", (bStr) => {
          const b = Number(bStr);
          let resultado;
          if (operacion === "sumar") {
            resultado = sumar(a, b);
          } else if (operacion === "restar") {
            resultado = restar(a, b);
          } else if (operacion === "multiplicar") {
            resultado = multiplicar(a, b);
          } else if (operacion === "dividir") {
            resultado = dividir(a, b);
          }
          console.log("Resultado:", resultado);
          rl.close();
        });
      });
    } else {
      console.log("Operación no válida");
      rl.close();
    }
  });
}

calculadora();



// console.log("La suma es: " + sumar(2,2))
// console.log("La resta es: " + restar(10,2))
// console.log("La multiplicacion es: " + multiplicar(2,3))
// console.log("La division es: " + dividir(2,2))
