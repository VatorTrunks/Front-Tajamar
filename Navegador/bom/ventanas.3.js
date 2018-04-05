
function app() {
    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnGoogle = document.querySelector('#btnGoogle')
    let eBtnImg = document.querySelector('#btnImg')
    let eBtnCerrar = document.querySelector('#btnCerrar')

    let ven
    let aVens = []

    eBtnAbrir.addEventListener('click', btnAbrir)
    eBtnGoogle.addEventListener('click', btnGoogle)
    eBtnImg.addEventListener('click', btnImg)
    eBtnCerrar.addEventListener('click', btnCerrar)

    function btnAbrir() {
        ven = window.open()
        aVens.push(ven)
        ven.document.write('<p>fulada cagarada</p>')
    }
    function btnGoogle() {
        ven = window.open('https://google.es')
        aVens.push(ven)
    }
    function btnImg() {
        ven = window.open('Gray-jedi.jpg')
        aVens.push(ven)
    }
    function btnCerrar() {
        aVens.forEach((item) => { item.close() })
        aVens = []


    }
}

window.addEventListener('load', app)

