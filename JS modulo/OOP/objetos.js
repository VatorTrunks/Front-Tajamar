


let libro1 = {
    autor: 'J.R.R. Tolkien',
    titulo: 'El señor de los anillos',
    editorial: 'Minotauro', 
    fecha: new Date(1954),
    generos: ['Fantasia'],
}

mostrarReferencia() {
    let ref = this.autor + ', '
    ref += ','
    ref += this.editorial +', '
    +this.fecha.getFullYear() + ', '
    console.log(ref)
}
}
/* //this es el objeto global del programa
let miFuncion = function (){
    console.log ('soy una funcion')
    console.log(this) */


/* // patron the invocacion method */
/* let o = {head: 'soy un objeto', */
/*         metodo: miFuncion }
o.metodo() 
 */

//patron de invocacion constructor , this es el nuevo objeto

/*  let oNuevoObjeto = new miFuncion () */

 // patron de invocacioon apply, permite definir el valod de this

 let obhj = {head: 'soy un objeto '}

 miFuncion.call(obhj) 