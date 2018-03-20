function calcularCuadrado(a){
    a*= a
return a
}

//los parametros elementales pasan por valor
let n = 5
console.log (calcularCuadrado(n))

console.log(n)



function calcularCubo (params) {

    let r
    r = params.valor*params.valor*params.valor
    return r
}
params = {valor: 5}
console.log(calcularCubo(params))





Console.log(calcularCubo(Object.assign({}, params)))
console.log(params)


//TRANSFORMAR OBJETO EN STRING JSON