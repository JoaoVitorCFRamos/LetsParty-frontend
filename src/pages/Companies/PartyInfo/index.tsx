import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import "./style.css";
import BlueButton from "../../../components/BlueButton";
import { addHours, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { formatPrice } from "../../Customers/InvoiceParty";

interface Party {
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

const PartyInfo = () => {
  const params = useParams();
  const [party, setParty] = useState<Party>();

  useEffect(() => {
    api.get(`/parties/${params.partyId}`).then((response) => {
      setParty(response.data);
    });
  }, [params.partyId]);

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

  const handlePaymentMethod = (
    paymentMethod: "BOLETO" | "DEBIT_CARD" | "CREDIT_CARD" | "PIX"
  ) => {
    if (paymentMethod === "BOLETO") {
      return "Boleto Bancário";
    } else if (paymentMethod === "DEBIT_CARD") {
      return "Cartão de Débito";
    } else if (paymentMethod === "CREDIT_CARD") {
      return "Cartão de Crédito";
    } else {
      return "Pix";
    }
  };

  return (
    <div className="partyDashboard-mainDiv">
      <div className="partyDashboard-topContent">
        <label className="partyDashboard-header">
          Olá {party?.company.name}, estas são as informações desta festa{" "}
        </label>
      </div>
      <div className="partyDashboard-mainContent">
        <div className="partyDashboard-leftCards">
          <div>
            <h1>Informações gerais</h1>
            <label>
              <span className="partyDashboard-spans">
                Nome do Aniversariante:
              </span>{" "}
              {party?.birthdayPerson}
            </label>
            <label>
              <span className="partyDashboard-spans">Idade:</span>{" "}
              {party?.birthdayAge} anos
            </label>
          </div>
          <div>
            <h1>Informações do evento</h1>
            <label>
              <span className="partyDashboard-spans">Data do evento:</span>{" "}
              {party && format(new Date(party.eventDate), "dd/MM/yyyy")} -{" "}
              {party &&
                format(addHours(new Date(party.eventDate), 3), "H:mm", {
                  locale: ptBR,
                })}{" "}
              às{" "}
              {party &&
                format(addHours(new Date(party.eventEndDate), 3), "HH:mm", {
                  locale: ptBR,
                })}
            </label>
            <label>
              <span className="partyDashboard-spans">
                Número de convidados:{" "}
              </span>
              {party?.numberOfGuests}
            </label>
            <label>
              <span className="partyDashboard-spans">Tema escolhido:</span>{" "}
              {party?.theme.name}
            </label>
            <label>
              <span className="partyDashboard-spans">Status: </span>
              {party && handleStatus(party.status)}
            </label>
          </div>
          <div>
            <h1>Informações de pagamento</h1>
            <label>
              <span className="partyDashboard-spans">Valor da festa: </span>
              {formatPrice(Number(party?.totalPrice))}
            </label>
            {party && party.payment !== null ? (
              <>
                <label>
                  <span className="partyDashboard-spans">
                    Forma de pagamento:{" "}
                  </span>
                  {party.payment && handlePaymentMethod(party.payment.method)}
                </label>
                {party.payment && party.payment.installments === 1 ? (
                  <label>
                    <span className="partyDashboard-spans">
                      Pagamento à vista
                    </span>
                  </label>
                ) : (
                  <label>
                    <span className="partyDashboard-spans">
                      Parcelas: {party.payment && party.payment.installments}
                    </span>
                  </label>
                )}
              </>
            ) : undefined}
          </div>
        </div>
        <div className="partyDashboard-rightCards">
          <div>
            <h1>Serviços opcionais contratados</h1>
            {party && party.requestedServices.length === 0 ? (
              <label>Nenhum serviço opcional foi contratado.</label>
            ) : (
              <label>
                <ul style={{ marginTop: 5, marginLeft: 5 }}>
                  {party?.requestedServices.map((service) => (
                    <li>{service.name}</li>
                  ))}
                </ul>
              </label>
            )}
          </div>
          <div>
            <label>
              <span className="partyDashboard-spans">Contratante:</span>{" "}
              {party?.customer.fullName}
            </label>
            {party?.status !== "CONFIRMED" ? undefined : (
              <label className="partyDashboard-contact">
                Clique aqui para entrar em contato via chat
              </label>
            )}
          </div>
        </div>
      </div>
      <div className="partyDashboard-buttonDiv"></div>
    </div>
  );
};

export default PartyInfo;
