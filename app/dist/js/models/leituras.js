export class Leituras {
    constructor() {
        this.leituras = [];
    }
    adiciona(leitura) {
        this.leituras.push(leitura);
    }
    lista() {
        return this.leituras;
    }
}
