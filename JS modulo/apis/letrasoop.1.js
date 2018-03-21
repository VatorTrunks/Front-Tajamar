(function()
app = {
  cadena: '', 
  codigo: 0,
  aMensajes : [
    'La frase mezcla mayusculas y minusculas',
    'Todas las letras son mayusculas',
    'Todas las letras son minusculas'],
  comprobarMayusculas : function (cadena = '') {
    

    if (this.cadena.toUpperCase() === this.cadena) {
        //Todo en mayusculas
        this.codigo = 1
    } else if (this.cadena.toLowerCase() === this.cadena) {
        // todo minusciulas 
        this.codigo = 2
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

   

  

