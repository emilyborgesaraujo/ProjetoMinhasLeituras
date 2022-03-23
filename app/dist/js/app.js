import { LeituraController } from "./controllers/leitura-controller.js";
const controller = new LeituraController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importarDadosLeituras();
    });
}
else {
    throw Error('Botão importa não foi encontrado');
}
