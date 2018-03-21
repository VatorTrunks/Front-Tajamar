let a = [50, 100, 50, 100, 50, 100]


let total = a.reduce((prev, item) => prev += item)

let media = total / a.length

 let mensaje = 'La media aritmetica es '+ media
console.log(mensaje)

