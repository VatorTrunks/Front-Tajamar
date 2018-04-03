//*$(document).ready (
   //* function(){
            
   //* })
   $(function() {

function app () {
let oDom = {
    eBotonSaludar : $('#btnSaludar'),
    eInputName :  $('#inpName'),
    eOutName: $('#outSaludar'),
    eBotonBorrar: $('#btnBorrar'),

}
    saludar = () => {
    let user = oDom.eInputName.val()
    console.log(user)
    oDom.eOutName.html() = (`Hola ${user}`)
    }
    let borrar = () => {
        oDom.eInputName.val('')
        oDom.eOutName.html('')
}
oDom.eBotonSaludar.on('click', saludar)
 oDom.eBotonBorrar.on('click', borrar)
}
