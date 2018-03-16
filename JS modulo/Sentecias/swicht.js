function mostraEsParCasos (n)
{

    //r puede valer 1 -1 -2 -3
let r = calcularPar(n)
let mensaje

swicht (r) {
    case 0 : 
     mensaje =`Èl numero ${n} es PAR`

    break
    case 1 :
      mensaje = `Èl numero ${n} es IMPAR`

    break
    case -2 :
     mensaje = `Èl numero ${n} NO ES NUMERO o es DECIMAL `

    break
    case -3 : 
    mensaje = `Èl numero ${n} NO ES NUMERO o es DECIMAL`

    break
    
}
console.log(mensaje)
}


mostrarEsParCasos('pepe')
mostrarEsParCasos(12)
mostrarEsParCasos(11)
mostrarEsParCasos(12.5)
mostrarEsParCasos(11.5)