//console.log('Hola mundo')
//window.alert('hola mundo, ya estamos de vuelta')

function app () {
let oDom = {
    eBotonSaludar : document.querySelector('#btnSaludar'),
    eInputName : document.querySelector('#inpName'),
    eOutName: document.querySelector ('#outSaludar'),
    eBotonBorrar: document.querySelector('#btnBorrar'),

}


//

let saludar = () => {
 let user = oDom.eInputName.value
 //console.log(user)
 oDom.eOutName.innerHTML = `Hola ${user}`
}

 let borrar = () => {
     oDom.eInputName.value =''
     oDom.eOutName.innerHTML = ''
 }

 oDom.eBotonSaludar.addEventListener('click', saludar)
 oDom.eBotonBorrar.addEventListener('click', borrar)
}

// let  saludo = (oE, user='amigo' )=>{
//console.log(`hola ${user}`)
/* }

let eBotonSaludar = document.querySelector('#btnSaludar')
//console.log(eBotonSaludar)
console.dir(eBotonSaludar)
oDom.eBotonSaludar.onclick =  () => saludo(event, "Pepe")
//cuando onclick= en Button ->"saludo('Jose')"

oDom.eBotonSaludar.addEventListener('click', saludar)
oDom.eBotonBorrar.addEventListener('click', borrar)
} */
window.addEventListener('load', app)
