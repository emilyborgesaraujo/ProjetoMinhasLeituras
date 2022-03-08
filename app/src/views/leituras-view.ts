import { Leituras } from "../models/leituras.js";
import { View } from "./view.js";

export class LeituraView extends View<Leituras> {

    protected template(model: Leituras): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>NOME DO LIVRO</th>
                    <th>DATA</th>
                    <th>NOTA DA LEITURA</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(leitura => {
                    return `
                        <tr>
                            <td>${leitura.nome}
                            </td>
                            <td>
                                ${this.formatar(leitura.data)}
                            </td>
                            <td>
                                ${leitura.nota}
                            </td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat()
            .format(data);
    }

}