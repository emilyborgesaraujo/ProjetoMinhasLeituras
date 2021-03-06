import { Leitura } from "../models/leitura.js";
import { Leituras } from "../models/leituras.js";
import { leituraService } from "../service/leitura-service.js";
import { LeituraView } from "../views/leituras-view.js";
import { MensagemView } from "../views/mensagem-view.js";
export class LeituraController {
    constructor() {
        this.leituraView = new LeituraView('#leituraView', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.leituras = new Leituras();
        this.leituraService = new leituraService();
        this.inputNome = document.querySelector('#nome');
        this.inputData = document.querySelector('#data');
        this.inputNota = document.querySelector('#nota');
        this.leituraView.update(this.leituras);
    }
    adiciona() {
        const leitura = Leitura.criaAPartirDeString(this.inputNome.value, this.inputData.value, this.inputNota.value);
        this.leituras.adiciona(leitura);
        this.limparFormulario();
        this.atualizaView();
    }
    importarDadosLeituras() {
        this.leituraService
            .obterLeiturasJaRealizadas()
            .then(dados => {
            return dados.filter(dados => {
                return !this.leituras.lista().some(Leitura => Leitura.ehIgual(dados));
            });
        })
            .then(dados => {
            for (let dado of dados) {
                this.leituras.adiciona(dado);
            }
            this.leituraView.update(this.leituras);
        });
    }
    limparFormulario() {
        this.inputNome.value = '';
        this.inputData.value = '';
        this.inputNota.value = '';
        this.inputNome.focus();
    }
    atualizaView() {
        this.leituraView.update(this.leituras);
        this.mensagemView.update('Leitura adicionada com sucesso');
    }
}
