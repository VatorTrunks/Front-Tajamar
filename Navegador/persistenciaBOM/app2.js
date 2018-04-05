(function () {

    function app() {

        let eNombre = document.querySelector("#inpNombre")
        let eGuardar = document.querySelector("#btnGuardar")
        let eBorrar = document.querySelector("#btnBorrar")
        let eSaludo = document.querySelector("#outSaludo")

        eGuardar.addEventListener('click', guardar)
        eBorrar.addEventListener('click', borrar)


        function guardar() {
          
            let nombre = eNombre.value
            window.localStorage.setItem('nombre', nombre)
            saludar()
        }

        function borrar() {
            localStorage.removeItem('nombre')
            eSaludo.innerHTML = ''
            eNombre.value = ''
        }

        function saludar() {
            let nombre = localStorage.getItem(`nombre`)
            if (nombre) {
                eSaludo.innerHTML = `Holi ${nombre}`
            }
        }
saludar()
    }





    window.addEventListener('load', app)
})()




