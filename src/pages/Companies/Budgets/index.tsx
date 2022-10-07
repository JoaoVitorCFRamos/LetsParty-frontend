import { addHours, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { formatPrice } from "../../Customers/InvoiceParty";
import "./style.css";

interface IParty {
  id: string;
  customer: {
    id: string;
    fullName: string;
  };
  company: {
    id: string;
    name: string;
  };
  acceptedTerms: boolean;
  eventDate: Date;
  eventEndDate: Date;
  birthdayPerson: string;
  birthdayAge: number;
  numberOfGuests: number;
  status: "IN_ANALYSIS" | "APPROVED" | "NOT_APPROVED" | "CONFIRMED";
  totalPrice: string;
  theme: {
    name: string;
  };
  requestedServices: {
    id: string;
    name: string;
    price: string;
  }[];
  payment?: {
    id: string;
    installments: number;
    method: "BOLETO" | "DEBIT_CARD" | "CREDIT_CARD" | "PIX";
    status: string;
  };
}

const Budgets = () => {
  const navigate = useNavigate();
  const [parties, setParties] = useState<IParty[]>();

  useEffect(() => {
    api.get("/parties/company").then((response) => {
      setParties(response.data);
    });
  }, []);

  const handleStatus = (
    status: "IN_ANALYSIS" | "APPROVED" | "NOT_APPROVED" | "CONFIRMED"
  ) => {
    if (status === "APPROVED") {
      return "Aprovada. Aguardando pagamento";
    } else if (status === "NOT_APPROVED") {
      return "Não aprovada";
    } else if (status === "CONFIRMED") {
      return "Confirmada";
    } else {
      return "Em análise";
    }
  };

  const handleAcceptParty = (partyId: string) => {
    api
      .put(`/parties/${partyId}/accept`)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Festa aceita com sucesso!");
        }
      })
      .catch((error) => {
        toast.error("Não foi possível realizar o aceite desta festa");
      });
  };

  const handleDeclineParty = (partyId: string) => {
    api
      .put(`/parties/${partyId}/decline`)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Festa aceita com sucesso!");
        }
      })
      .catch((error) => {
        toast.error("Não foi possível realizar o aceite desta festa");
      });
  };

  return (
    <div className="budgets-mainDiv">
      <label className="budgets-header">Histórico de Festas</label>
      <div className="budgets-divTable">
        <table>
          <thead>
            <tr>
              <th>Contratante</th>
              <th>Aniversariante</th>
              <th>Nº de Convidados</th>
              <th>Data do evento</th>
              <th>Valor</th>
              <th>Status</th>
              <th>Aceitar / Negar orçamento</th>
              <th>Detalhes da festa</th>
            </tr>
          </thead>
          <tbody>
            {parties?.map((party, index) => (
              <tr key={index}>
                <td data-column="Contratante">{party.customer.fullName}</td>
                <td data-column="Aniversariante">{party.birthdayPerson}</td>
                <td data-column="Nº de Convidados">{party.numberOfGuests}</td>
                <td data-column="Data do evento">
                  {format(new Date(party.eventDate), "dd/MM/yyyy")}
                  <br />{" "}
                  {format(addHours(new Date(party.eventDate), 3), "H:mm", {
                    locale: ptBR,
                  })}{" "}
                  às{" "}
                  {format(addHours(new Date(party.eventEndDate), 3), "HH:mm", {
                    locale: ptBR,
                  })}
                </td>
                <td data-column="Valor">
                  {formatPrice(Number(party.totalPrice))}
                </td>
                <td data-column="Status">{handleStatus(party.status)}</td>
                <td
                  data-column="Aceitar / Negar orçamento"
                  className="budgets-acptDclnTd"
                >
                  {party.status === "IN_ANALYSIS" ? (
                    <>
                      <button
                        onClick={() => handleAcceptParty(party.id)}
                        className="budgets-tdAcceptButtons"
                      >
                        Aceitar
                      </button>
                      <button
                        onClick={() => handleDeclineParty(party.id)}
                        className="budgets-tdDeclineButtons"
                      >
                        Negar
                      </button>
                    </>
                  ) : (
                    <p className="budgets-p">-</p>
                  )}
                </td>
                <td data-column="Detalhes da festa</th>">
                  <button
                    onClick={() => navigate(`/party/${party.id}/info`)}
                    className="budgets-tdRegisterButtons"
                  >
                    Ver detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Budgets;
