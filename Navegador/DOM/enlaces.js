




function app() {

    let count = 0;

    aLinks = document.querySelectorAll('.social')
    const ITEMS = aLinks.lenght

    function cambialista(ev) {
        let nodeItem = ev.target
        if (nodeItem.textContent.indexoF('Ops') >= 0) {
            return

        }
    }
    nodeItem.textContent = "oPS, NO TENGO " + nodeItem.textContent;
    count++;
    if (count === ITEMS) {
        nodeItem.parentNode.parentNode.outerHTML = "<p>Lo siento estoy ilocalizable</p>"
    }







    aLinks.forEach(node => {
        node.addEventListener('click', cambiaLista)

    }
        }
cambiaLista(ev)


window.addEventListener('load', app)








