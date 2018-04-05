
function app() {
    let eBtnAbrir = document.querySelector('#btnAbrir')

    let eBtnCerrar = document.querySelector('#btnCerrar')
    eBtnCerrar.disabled = 'true'
    let ven
    let aVens = []

    eBtnAbrir.addEventListener('click', btnClick)
    eBtnCerrar.addEventListener('click', btnClick)



    function btnClick(ev) {
        togleButtons()
        switch (ev.target.id) {
            case 'btnAbrir':
            ven.window.open()
        console.log(ev.target.id)
            
                break
            case 'btnCerrar':
            function btnCerrar() {
                aVens.forEach ((v) => { v.close() })
                togleButtons()
                aVens = []
        
                break
            }
            
        }
    }
 

    
    
}

window.addEventListener('load', app)

