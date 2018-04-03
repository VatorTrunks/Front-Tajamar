//console.log('Hola mundo')
//window.alert('hola mundo, ya estamos de vuelta')

function app () {
let oDom = {
    eBotonSaludar : document.querySelector('#btnSaludar')}




let  saludo = (oE, user='amigo' )=>{
console.log(`hola ${user}`)
}

let eBotonSaludar = document.querySelector('#btnSaludar')
console.log(eBotonSaludar)
console.dir(eBotonSaludar)
//oDom.eBotonSaludar.onclick =  () => saludo(event, "Pepe")
//cuando onclick= en Button ->"saludo('Jose')"

oDom.eBotonSaludar.addEventListener('click', 
 () => saludo (Event, "Pepe"))
}
window.addEventListener('load', app)
