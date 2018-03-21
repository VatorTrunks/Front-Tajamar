
app = {
  cadena: '', 
  aMensajes = [
    'La frase mezcla mayusculas y minusculas',
    'Todas las letras son mayusculas',
    'Todas las letras son minusculas'],
  comprobarMayusculas : function (cadena = '') {
    let r = 0

    if (this.cadena.toUpperCase() === this.cadena) {
        //Todo en mayusculas
        r = 1
    } else if (this.cadena.toLowerCase() === this.cadena) {
        // todo minusciulas 
        r = 2
    } else {
        //mezclado
        r = 0
    }


    return r
},

let sMensaje = `En la frase ${this.cadena}
${this.aMensajes[this.comprobarMayusculas(this.cadena)]}`
console.log(sMensaje)
}
}










appMayusculas.cadena = 'HOLA PEPE'
appMayusculas.mostrar()

   

  

