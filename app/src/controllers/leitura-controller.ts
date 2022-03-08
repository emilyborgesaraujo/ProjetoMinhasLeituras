import { Leitura } from "../models/leitura.js";
import { Leituras } from "../models/leituras.js";
import { LeituraView } from "../views/leituras-view.js";
import { MensagemView } from "../views/mensagem-view.js";

export class LeituraController {
    private inputNome: HTMLInputElement;
    private inputData: HTMLInputElement;
    private inputNota: HTMLInputElement;
    private leituraView = new LeituraView('#leituraView', true);
    private mensagemView = new MensagemView('#mensagemView');
    private leituras = new Leituras();

    constructor() {
        this.inputNome = document.querySelector('#nome') as HTMLInputElement;
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputNota = document.querySelector('#nota') as HTMLInputElement;
        this.leituraView.update(this.leituras);
    }

    public adiciona(): void {

        const leitura = Leitura.criaAPartirDeString(
            this.inputNome.value,
            this.inputData.value,
            this.inputNota.value
        );

        this.leituras.adiciona(leitura);
        this.limparFormulario();
        this.atualizaView();

    }

    private limparFormulario(): void {
        this.inputNome.value = '';
        this.inputData.value = '';
        this.inputNota.value = '';
        this.inputNome.focus();
    }

    private atualizaView(): void {
        this.leituraView.update(this.leituras);
        this.mensagemView.update('Leitura adicionada com sucesso');
    }
}