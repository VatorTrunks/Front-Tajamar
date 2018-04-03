class Personita {
    constructor (nombre, fecha, altura) {
this.nombre = nombre
this.fechaNac = fecha
this.altura = altura


    }
_calcAños () {
    let hoy = new Date()
    parseInt((hoy - this.fechaNac)/(1000*60*60*24*3625))


    return ' '
}
    saludar() {
        let mensaje
        console.log(`Hola soy ${this.nombre}
        y tengo ${this._calcularAños} años`)
    }
}


/* persona1 = new Personita('Juan', new Date(1995,3,3), 1.60)
persona1.saludar() */

class Alumno extends Personita {
    constructor(nombre, fecha, altura, aula, equipo) {
    super (nombre, fecha, altura)
    this.aula = aula
    this.equipo = equipo
}
saludar(){
    super.saludar()
    console.log(`Soy del equipo ${this.equipo} `)
}
}
alumno1 = new Alumno('Yisus', new Date(1995,3,3), 1.60,'T2','Delta')
alumno1.saludar()