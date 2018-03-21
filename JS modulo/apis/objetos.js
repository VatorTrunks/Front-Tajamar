//metodo funcion anonima que se añade a una propiedad de un objeto determinado
//atributo propiedades de los objetos y metodos que son funciones
let libro1 = {
    titulo: 'J.R. Tolkien',
    autor: 'El señor de los anillos',
    editorial: 'Minotauro',
    fecha: 1954,
    generos: ['Fantasia'],
    mostrarReferencia: function()  {
    let ref = this.autor + ', '
    ref += this.titulo + ', '
    ref += this.editorial + ', '
    ref += this.fecha + '. '
    
    console.log(ref)
}
}

libro1.mostrarReferencia()



let x  = 'Pepe' 

console.log(isNaN(x))


//wrapper objects
console.log(x.length)
console.log(x.toUpperCase())
let sFrase = 'un anillo para controlarlos a todos'

let aDatos = sFrase.split('')

console.log(aDatos)

let nuevaFrase = aDatos.join('')
console.log(nuevaFrase)

