export class Leitura {
    constructor(_nome, _data, _nota) {
        this._nome = _nome;
        this._data = _data;
        this._nota = _nota;
    }
    get nome() {
        return this._nome;
    }
    get data() {
        return this._data;
    }
    get nota() {
        return this._nota;
    }
    static criaAPartirDeString(nomeString, dataString, notaString) {
        const exp = /-/g;
        const nome = nomeString;
        const data = new Date(dataString.replace(exp, ','));
        const nota = parseInt(notaString);
        return new Leitura(nome, data, nota);
    }
    ehIgual(leitura) {
        return this.nome === leitura.nome;
    }
}
