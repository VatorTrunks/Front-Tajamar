
function app () {
    let eBtnAbrir = document.querySelector('#btnAbrir')
    
    let eBtnCerrar = document.querySelector('#btnCerrar')
    eBtnCerrar.disabled='true'
    let ven
    let aVens = []

    eBtnAbrir.addEventListener('click', btnAbrir)
    eBtnCerrar.addEventListener('click', btnCerrar)

    function btnAbrir () {
     ven = window.open()
     eBtnAbrir.disabled= !eBtnAbrir.disabled
     eBtnCerrar.disabled =!eBtnCerrar.disabled
     aVens.push(ven)
     console.log(aVens)

    }
    function btnCerrar () {
        aVens.forEach((item)=>{item.close()})
        togleButtons()
        aVens = []


    }
}

window.addEventListener('load', app)

