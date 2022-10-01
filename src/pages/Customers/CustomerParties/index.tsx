import "./style.css";
import PartyTemplate from "../../../components/PartyTemplate";
import api from "../../../services/api";
import { useEffect, useState } from "react";

// interface invoices {
//   birthdayPerson: string;
//   birthdayAge: number;

// }


const CustomerParties = () => {
  // const [invoice, setInvoice] = useState<invoices[]>();

  // const getInvoiceInfo = () => {

  //   api.get('/customers/invoices/customer').then((response) => {
  //     setInvoice(response.data);
  //   });
  // }

  // useEffect(() => {
  //   getInvoiceInfo
  // }, [])

  // buffets?.map((buffet, index) => (
  //   <BuffetCard
  //   />
  // ))

  return (

    // <div className="customerParties-content">
    //   <label className="customerParties-header">Minhas festas</label>
    //   <div className="customerParties-cards">
    //     {
    //       invoice.map((invoice) => (
    //         <PartyTemplate
    //           birthdayPerson={invoice.birthdayPerson}
    //           date={new Date()}
    //           buffetName="Buffet Alegria"
    //           status={{ type: "IN_ANALYSIS", message: "Em análise" }}
    //         />
    //       )
    //       )
    //     }
    //     {/* TODO Integrar com backend */}
    //   </div>
    // </div>


    <div className="customerParties-content">
      <label className="customerParties-header">Minhas festas</label>
      <div className="customerParties-cards">
        <PartyTemplate
          birthdayPerson="Ana Gabriela"
          date={new Date()}
          buffetName="Buffet Alegria"
          status={{ type: "IN_ANALYSIS", message: "Em análise" }}
        />
        {/* TODO Integrar com backend */}
      </div>
    </div>
  );
};

export default CustomerParties;
