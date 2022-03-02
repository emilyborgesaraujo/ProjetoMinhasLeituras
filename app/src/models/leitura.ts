export class Leitura {

    constructor(
        private _nome: String,
        private _data: Date,
        private _nota: number
    ) {}

    get nome(): String {
        return this._nome;
    }

    get data(): Date {
        return this._data;
    }

    get nota(): number {
        return this._nota;
    }

    public static criaAPartirDeString(nomeString: string, dataString: string, notaString: string): Leitura {
        const exp = /-/g;
        const nome = nomeString;
        const data = new Date(dataString.replace(exp,','));
        const nota = parseInt(notaString);
        return new Leitura(nome, data, nota);
    }
    
}