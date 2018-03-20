

let r = 1
function calcularFactorial (n)
  {
    for (let i = n; i >= 1; i--) { 
       r= r * i;
    }
    return r

console.log(calcularFactorial(3))

    

/* function mostrarFactorial (n) {
    console.log(calcularFactorial (n))} */


function mostrarFactorial (n) {

    let mensaje = `El factorial de ${n} es `

    mensaje += calcularFactorial(n) 
    console.log(mensaje) 
 }

 mostrarFactorial(3)



