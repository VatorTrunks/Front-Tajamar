
let oDatos = {
    alto: 2,
    ancho: 5,
    largo: 7,
    peso: 4,
    color:9
}
/* console.log("Array")
console.log("Object")

for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    console.log(item)
}


for (const key in oDatos) {
        const item = oDatos[key];
        console.log(item)
    }
} */

aDatos = [2, 5, 7, 4, 9]
//metodos para iterar un array
//forEach (inmutable)
aDatos.forEach(item => console.log(item))
//map crea una proyeccion del original
let aCuadrados = aDatos.map(item => item*item)

console.log(aCuadrados)


let aPares = aDatos.filter(item => item%2 === 0)

console.log(aPares)

let aImparesCuadrados = aDatos
.filter(item => item%2 !== 0)
.map(item => item*item)
console.log(aImparesCuadrados)


let total = aDatos.reduce((prev, item) => prev += item)
console.log(total)
/* 
aDatos.reduceRight()
aDatos.some()
aDatos.every() */