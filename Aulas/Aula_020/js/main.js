function meuEscopo() {
    const form = document.querySelector('.form');

    function recebeEventoForm(evento){
        evento.preventDefault();
        console.log(1)
    }
    form.addEventListener('submit', recebeEventoForm);
}

