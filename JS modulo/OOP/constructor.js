function Libro (autor = '',
    titulo = '',
    editorial = '',
    fecha = new Date(0), 
    generos = []
) {
    this.autor = autor,
    this.titulo = titulo,
    this.editorial = editorial, 
    this.fecha = fecha,
    this.generos = generos
}


/* libro()
    console.log(autor) */

let libro1 = new Libro(
'J, R, R, Tolkien',
'El señor de los anillos',
'Minotauro',
new Date ('1979'),
['Fantasia'] )
 
console.log(libro1) 
let libro2 = new Libro( 'Willian Gibson','Neuromante', 'Minotauro', new Date('1980'),['SciFi'])
//Siempre se puede modificar cualquier objeto
libro2.propietario = 'Pepe'
console.log(libro2) 


console.log (typeof libro1)
console.log(libro2.constructor.name)