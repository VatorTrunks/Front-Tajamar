function Empresa (params = {}) {
    this.nombre = params.nombre || ''
    this.direccion = params.direccion || ''
    this.telefono = params.telefono || ''
    this.NIF = params.NIF || ''
}

function Item (desc = '', precio = 0, cantidad = 0) {
        this.descripcion = desc
        this.precio = precio
        this.cantidad = cantidad
}

function Factura( 
                cliente = new Empresa(), 
                formaPago = '',
                tipoIVA = 0) {


    this.cliente = cliente
    this.productos = []
    this.formaPago = formaPago
    this.tipoIVA = tipoIVA
    this.total = 0
    this.IVA = 0
    this.calcularTotal = function() {
        let totalSinIva = 0
        this.productos.forEach(
            item => totalSinIva += item.cantidad * item.precio 
        )     
        this.IVA = totalSinIva * this.tipoIVA
        this.total = totalSinIva + this.IVA
    }
    this.addItem = function(desc = '', precio = 0, cantidad = 0){ 
        this.productos.push(
            new Item(desc, precio, cantidad)
        )
    }
    this.listarItems = function () {
        let r = ``
        this.productos.forEach(item => {
            r += `${item.descripcion} - ${item.cantidad} /  ${item.precio}€
            `
        });
        return r
    }
    this.mostrar = function() {
        this.calcularTotal()
        return ` 
        -----------------------------
        ${this.nosotros.nombre}
        -----------------------------
            ${this.nosotros.direccion} 
            ${this.nosotros.telefono} 
            ${this.nosotros.NIF} 
        ---------------------------------------------------
                                ${this.cliente.nombre}
                                ${this.cliente.direccion}
                                ${this.cliente.NIF}
        ----------------------------------------------------
        ${this.listarItems()}
        -----------------------------------------------------
                                    Total Iva : ${this.IVA} €
                                    Total : ${this.total} €
                                    Forma de Pago : ${this.formaPago}
                    `
    }
}

Factura.prototype.nosotros = new Empresa({
    nombre : 'Ediciones Boracay',
    direccion : 'c/ Pez, 1',
    telefono : '343532423',
    NIF: 'B-4395873'}),

Factura.prototype.calcularTotal = function() {
    let totalSinIva = 0
    this.productos.forEach(
        item => totalSinIva += item.cantidad * item.precio 
    )     

    Factura.prototype.addItem = function(desc = '', precio = 0, cantidad = 0){ 
        this.productos.push(
            new Item(desc, precio, cantidad)
        )
Factura.prototype.listarItems = function () {
    let r = ``
    this.productos.forEach(item => {
        r += `${item.descripcion} - ${item.cantidad} /  ${item.precio}€
        `
    });
Factura.prototype.listarItems = function () {
        let r = ``
        this.productos.forEach(item => {
            r += `${item.descripcion} - ${item.cantidad} /  ${item.precio}€
            `
        });
        let factura01 = new Factura (
    
    new Empresa({
        nombre : 'Libros Guacamayo',
        direccion : 'c/ Olmos, 22',
        telefono : '343343069',
        NIF: 'B-9843973'}),
    'contado', 0.22
)

factura01.addItem('El Señor de....', 40, 20)
factura01.addItem('Neuromante', 35, 30)
factura01.addItem('Dracula', 35, 20)


let factura02 = new Factura (
    
    new Empresa({
        nombre : 'Libros El pelicano',
        direccion : 'c/ Pinos, 22',
        telefono : '54564544',
        NIF: 'B-9843973'}),
    '60 dias vista', 0.22
)

factura02.addItem('El perfume', 1, 20)
factura02.addItem('El Hobbit', 35, 30)
factura02.addItem('El sueño', 35, 20)

console.log(factura02.mostrar())

/* console.log(factura02.constructor)
console.log(Factura.constructor) */