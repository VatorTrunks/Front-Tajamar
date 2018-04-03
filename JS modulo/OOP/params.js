function Point () {
    this.x = param.x || 0
    this.y = param.y ||0
    this.rad = param.r ||1
    this.calcularCircunferencia = function () {},
    this.calcularCirculo = function () {},
    this.calcularOtro = function () {},
    this.calcularotroMas = function () {}
}

p1 =new Point ( {x:2, y:3, r:5})

p1.calcularCircunferencia()
p1.calcularOtro()


function app(param)

app = new App({user: 'Pepe'})
