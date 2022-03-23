import { Leitura } from "../models/leitura.js";

export class leituraService {

    public obterLeiturasJaRealizadas(): Promise<Leitura[]> {
        return fetch('https://minhasleituras.free.beeceptor.com/leituras') 
            .then(res => res.json())
            .then((dados: Leitura[]) => {
                return dados.map(dado => {
                    return new Leitura(dado.nome, new Date(), dado.nota);
                })
            })
    }
}