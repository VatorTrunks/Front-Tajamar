function calcularCuadrado ( a ) {
a*= a
return a
}

function calcularCubo ( a ) {
    a = a * a * a
    return a
    }

function mostrarCalculo(n,f) {
    console.log(`el resultado es ${f(n)}`)
}
let n = 5

mostrarCalculo(n, calcularCubo)

console.log(calcular(n, function () {
    return n*2
}))

setTimeout(calcularCubo, 2000 )






