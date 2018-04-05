
/* //  Una sola vez
let idT= window.setTimeout()
window.clearTimeOut(idT)
// n veces, cada cierto tiempo
*/
/* let crono = 0

let idI = window.setInterval(function(){
    crono++
}, 1000) 
window.clearInterval(idI) */

(function () {
    function app() {
        let idI
        let crono = 0
        let aBotones = document.querySelectorAll('button')
        let eCrono = document.querySelector('.crono')
        aBotones.forEach(item => {
            item.addEventListener('click', btnClick)
        });
        function btnClick(ev) {
            if (ev.target.id === 'btnIniciar') {
                aBotones[0].disabled = true
                aBotones[0].textContent = 'Continuar'
                aBotones[1].disabled = false

                idI = setInterval(function () {
                    crono += 0.01
                    eCrono.innerHTML = crono.toFixed(2)
                }, 100)
            } else if (ev.target.id === 'btnParar') {
                aBotones[0].disabled = false
                aBotones[1].disabled = true
                aBotones[2].disabled = true
                clearInterval(idI)
            } else /* ev.target.id === 'btnReset') { */

                aBotones[0].textContent = 'Iniciar'
            aBotones[1].disabled = true
            aBotones[2].disabled = true
            crono = 0
            eCrono.innerHTML = crono.toFixed(2)

        }

    }


    window.addEventListener('load', app)




})()



