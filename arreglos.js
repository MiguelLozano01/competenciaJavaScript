var vector=[];
var sum=0;
for (let i = 0; i < 20; i++) {
    vector[i]=Math.round((Math.random())*100);
}
console.log(vector);
for (let i = 0; i < vector.length; i++) {
    sum += vector[i];
}
console.log(`La suma de los numeros es:`+ sum);
var avg=0;
for (let i = 0; i < vector.length; i++) {
    avg += vector[i]/20;
}
console.log(`El promedio es:`+ avg);

console.log (`El numero maximo es: ${Math.max(...vector)}`);

//************************************************

console.log (`El numero minimo es: ${Math.min(...vector)}`);

for (let i = 0; i < vector.length; i++) {
    if (vector%2 ==0) {
        console.log(`los numeros pares son `)        
    }
}
