var numeros = {
    numerador1: 2,
    numerador2:  Math.round(Math.random()*100),
    denominador1: 2,
    denominador2:  Math.round(Math.random()*100)
}
var operacion1;
var operacion2;
for (let i = 0; i < 1; i++) {
   operacion1=numeros.numerador1/numeros.denominador1;
   operacion2 = numeros.numerador2/numeros.denominador2;
}

console.log(`Division numero uno es igual a ${operacion1}`);
console.log(`Division numero uno es igual a ${operacion2}`);
