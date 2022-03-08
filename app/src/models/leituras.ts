import { Leitura } from "./leitura.js";

export class Leituras {
    private leituras: Leitura[] = [];

    public adiciona(leitura: Leitura): void {
        this.leituras.push(leitura);
    }

    public lista(): readonly Leitura[] {
        return this.leituras;
    }
}