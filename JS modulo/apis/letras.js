/** @function : comprobar si la cadena es : 
 * -todo mayusculas 
 * -todo misnusculas 
 * -mezcla de ambas
 * @param : string
 * @returns: number
 * */


function comprobarMayusculas(cadena = '') {
    let r = 0

    if (cadena.(toUpperCase) === cadena) {
        //Todo en mayusculas
        r = 1
    } else if (cadena.(toLowerCase) === cadena) {
        // todo minusciulas 
        r = 2
    } else {
        //mezclado
        r = 0
    }


    return r
}





function mostrarComparacionMayusculas(cadena) {

    amensajes = [
        'La frase mezcla mayusculas y minusculas',
        'Todas las letras son mayusculas',
        'Todas las letras son minusculas'
    ]

    let sMensaje = `En la frase ${cadena}
    ${aMensajes[comprobarMayusculas(cadena)]}`
    console.log(sMensaje)
}

