
'use strict'
// en ES6 let y const con ambito {}

function mostrar () {


   let x = 2
   { const x = 32}
   console.log(x)
}

const x = 5

mostrar()




function calcularCircunferencia (radio){
    return 2 * Math.PI * radio

}
function mostrarCircunferencia (radio){
let cir = calcularCircunferencia(radio)



console.log(`
La circunferencia de radio ${radio}
tiene de longitud ${cir}`)
}
const X = 5
mostrar()
mostrarCircunferencia(5)
