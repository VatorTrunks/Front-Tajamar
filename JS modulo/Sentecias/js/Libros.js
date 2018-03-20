{
{



let libro1 = {
    titulo: 'J.R. Tolkien',
    autor:'El señor de los anillos',
    editorial:'Minotauro',
    fecha: 1954,
    generos: ['Fantasia'],
}


let libro2 = {
    titulo:'Neuromante',
    autor:'Willian Gibson',
    editorial:'Minotauro',
    fecha: 1980,
    primera_edicion: {
        editorial: 'Acme',
        year: 1960,
    },
    generos: ['SciFi','CyberPunk'],

}



 /* console.log(libro1)
console.log(libro2)
console.log('El autor es ${libro2.autor}')
console.log(libro1.fecha)
console.log(typeof libro1.fecha)
console.log(typeof libro2.generos[0])
console.log(libro2.primera_edicion.year)  */
}

for (let key in libro1) {
    console.log(`La clave ${key} vale `, libro1[key])
     
        
    }
