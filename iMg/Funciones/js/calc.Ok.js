'use stirct'
// a y b son argumentos
function sumar(a, b) {
    c = a + b
    
    return c

}

function restar(a, b) {
    var c= a -b
  
    return c
}
funtion mostrar(r) {
    console.log("El resultado es", r)

}
mostrar(sumar(123, 34))
mostrar(sumar(23, 45))
mostrar(sumar(2, 34))


var x = 123
var y = 34
var r = restar (x, y)
mostrar (r)


var r = restar  (y, x)
mostrar (r)