import { View } from "./view.js";
export class LeituraView extends View {
    template(model) {
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
    formatar(data) {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}
