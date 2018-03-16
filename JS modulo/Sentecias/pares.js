'user strict'


/* function parImpar (numero)
let numero
if(isNaN (numero) )

numero = 

function parImpar (numero)
if ( numero % 2 == 0){'La cifra numero es par'}
else {'la cifra numero es impar'} */

function calcularPar (n) {
    let r = 0
    if(isNan(n/2)){
        r = -1
    } else if (parseInt(n) != parseFloat(n)){
    r = -2}
    else {
    { r= n%2}
}
return r

//1ºfuncion que comprueba que el argumento sea par o impar
// Devolviendo 0 , 1 , -1 si el argumento no es un numero
Function calcularPar(n) {
return isNaN(n/2) ? -1 : n%2
}


///* function test(n) {

}

test(calcularPar())
test(calcularPar('pepe'))
test(calcularPar(12))
test(calcularPar(11))

test(calcPar())
test(calcPar('pepe'))
test(calcrPar(12))
test(calcPar(11))
 */
//muestra el resultado
function MostarEsPar (n) {

    const aMensajes = [
        `el numero ${n} es PAR`,
        `el numero ${n} es IMPAR`,
       `el dato $ {n} no es un numero`,
    `el numero &{n} es decimal`]
//r puede valer 0, 1 , 
    let r = calcPar(n)
    // si r es -1 lo convierto a 2 
    if = (r === -1) {r = 2}
    if = (r === -1) {r = 2}

    //muestri la posicion r del array
    console.log(aMensajes[r])
}


MostrarEspar('Pepe')
MostrarEspar('12')
MostrarEspar('11')