const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        alert('Deu certo');
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}