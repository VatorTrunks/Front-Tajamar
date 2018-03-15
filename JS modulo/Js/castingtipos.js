

function main(){
    let num1 = 23
    let num2 = '20'
    
    
    let r = num1 - num2
    console.log(r)
    console.log(typeof r)
    console.log(typeof num2)
    
    let x = 'hola ' 
    let y = 'Pepe'
    console.log(x + y)
    let m = num1 + num2
    nodeconsole.log(m)
    
    
    r = num1 + Number(num2)
    console.log(r)
    console.log(typeof r)
    
    
    
    r = num1 + +num2
    
    r
    console.log(r)
    console.log(typeof r)

r = num1 - x
console.log(r)
console.log(typeof r)

r = 0 / 0
console.log(r)
console.log(typeof r)

if (isNan(r)){
console.log('Ole has conseguido un NaN')
 
}
}


main()

