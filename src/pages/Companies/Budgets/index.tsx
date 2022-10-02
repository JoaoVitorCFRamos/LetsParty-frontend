import "./style.css"
import { TiTick } from 'react-icons/ti';
// <TiTick color='#0FA958' size={20} />

export const Budgets = () => {
    return (
        <div className="budgets-mainDiv">
            <label className="budgets-header">Histórico de orçamentos</label>
            <div className="budgets-divTable">
                <table>
                    <thead>
                        <tr>
                            <th>Nome </th>
                            <th>Quantidade de Pessoase</th>
                            <th>Data da festa</th>
                            <th>Preço estimado</th>
                            <th>Status</th>
                            <th>Aceitar/Negar</th>
                            <th>Registro da festa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-column="Nome">Maisa</td>
                            <td data-column="Quantidade de Pessoase">1200</td>
                            <td data-column="Data da festa">28/10/2022</td>
                            <td data-column="Preço estimado">R$10.000</td>
                            <td data-column="Status">Aceita</td>
                            <td data-column="ceitar/Negar" className="budgets-acptDclnTd">
                                <button className="budgets-tdAcceptButtons">Aceitar </button>
                                <button className="budgets-tdDeclineButtons">Negar</button>
                            </td>
                            <td data-column="Registro da festa</th>">
                                <button className="budgets-tdRegisterButtons">Registro</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-column="Nome">Maisa</td>
                            <td data-column="Quantidade de Pessoase">1200</td>
                            <td data-column="Data da festa">28/10/2022</td>
                            <td data-column="Preço estimado">R$10.000</td>
                            <td data-column="Status">Aceita</td>
                            <td data-column="ceitar/Negar" className="budgets-acptDclnTd">
                                <button className="budgets-tdAcceptButtons">Aceitar </button>
                                <button className="budgets-tdDeclineButtons">Negar</button>
                            </td>
                            <td data-column="Registro da festa</th>">
                                <button className="budgets-tdRegisterButtons">Registro</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-column="Nome">Maisa</td>
                            <td data-column="Quantidade de Pessoase">1200</td>
                            <td data-column="Data da festa">28/10/2022</td>
                            <td data-column="Preço estimado">R$10.000</td>
                            <td data-column="Status">Aceita</td>
                            <td data-column="ceitar/Negar" className="budgets-acptDclnTd">
                                <button className="budgets-tdAcceptButtons">Aceitar </button>
                                <button className="budgets-tdDeclineButtons">Negar</button>
                            </td>
                            <td data-column="Registro da festa</th>">
                                <button className="budgets-tdRegisterButtons">Registro</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-column="Nome">Maisa</td>
                            <td data-column="Quantidade de Pessoase">1200</td>
                            <td data-column="Data da festa">28/10/2022</td>
                            <td data-column="Preço estimado">R$10.000</td>
                            <td data-column="Status">Aceita</td>
                            <td data-column="ceitar/Negar" className="budgets-acptDclnTd">
                                <button className="budgets-tdAcceptButtons">Aceitar </button>
                                <button className="budgets-tdDeclineButtons">Negar</button>
                            </td>
                            <td data-column="Registro da festa</th>">
                                <button className="budgets-tdRegisterButtons">Registro</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-column="Nome">Maisa</td>
                            <td data-column="Quantidade de Pessoase">1200</td>
                            <td data-column="Data da festa">28/10/2022</td>
                            <td data-column="Preço estimado">R$10.000</td>
                            <td data-column="Status">Aceita</td>
                            <td data-column="ceitar/Negar" className="budgets-acptDclnTd">
                                <button className="budgets-tdAcceptButtons">Aceitar </button>
                                <button className="budgets-tdDeclineButtons">Negar</button>
                            </td>
                            <td data-column="Registro da festa</th>">
                                <button className="budgets-tdRegisterButtons">Registro</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-column="Nome">Maisa</td>
                            <td data-column="Quantidade de Pessoase">1200</td>
                            <td data-column="Data da festa">28/10/2022</td>
                            <td data-column="Preço estimado">R$10.000</td>
                            <td data-column="Status">Aceita</td>
                            <td data-column="ceitar/Negar" className="budgets-acptDclnTd">
                                <button className="budgets-tdAcceptButtons">Aceitar </button>
                                <button className="budgets-tdDeclineButtons">Negar</button>
                            </td>
                            <td data-column="Registro da festa</th>">
                                <button className="budgets-tdRegisterButtons">Registro</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Budgets;