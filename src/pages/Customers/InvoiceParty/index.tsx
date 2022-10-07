import { addDays, format } from "date-fns";
import { ChangeEvent, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { parseHour } from "../../../utils/parseHour";
import ChoosePartyTheme from "../ChoosePartyTheme";
import FinishInvoice from "../FinishInvoice";
import OptionalServices from "../OptionalServices";
import PartyInformations from "../PartyInformations";

type Invoice = {
  birthdayPerson: string;
  birthdayAge: number;
  pricingId: string;
  eventDate: string;
  eventHourId: string;
  partyThemeId: string;
  requestedServicesId: string[];
};

export const { format: formatPrice } = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

const InvoiceParty = () => {
  const params = useParams();
  const [step, setStep] = useState<number>(1);
  const [fields, setFields] = useState<Invoice>({
    birthdayPerson: "",
    birthdayAge: 0,
    eventDate: "",
    eventHourId: "",
    pricingId: "",
    partyThemeId: "",
    requestedServicesId: [],
  });
  const [pricing, setPricing] = useState<any>({});
  const [services, setServices] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<string>("");

  const handlePrevStep = () => {
    setStep((step) => step - 1);
  };

  const handleNextStep = () => {
    setStep((step) => step + 1);
  };

  const calculatePrice = useCallback(() => {
    const sumOptionals = services.reduce((sumTotal, service) => {
      return sumTotal + Number(service.price);
    }, 0);

    setTotalPrice(formatPrice(Number(pricing.price) + sumOptionals || 0.0));
  }, [pricing, services]);

  useEffect(() => {
    if (fields.pricingId !== "" || fields.pricingId === null) {
      api.get(`/companies/pricings/${fields.pricingId}`).then((response) => {
        setPricing(response.data);
      });
    }

    if (fields.requestedServicesId.length > 0) {
      api
        .get<any[]>(`/companies/${params.buffetId}/services`)
        .then((response) => {
          const filter = response.data.filter((service) => {
            return fields.requestedServicesId.some((el) => {
              return el === service.id;
            });
          });

          setServices(filter);
        });
    }
  }, [fields.pricingId, fields.requestedServicesId, params.buffetId]);

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  const onChangeField =
    (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setFields({ ...fields, [field]: event.target.value });
    };

  const onChangeSelectField =
    (field: string) => (event: ChangeEvent<HTMLSelectElement>) => {
      setFields({ ...fields, [field]: event.target.value });
    };

  const onChangeOptionalServicesCheckbox = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setFields({
        ...fields,
        requestedServicesId: [
          ...fields.requestedServicesId,
          event.target.value,
        ],
      });
    } else {
      const index = fields.requestedServicesId.indexOf(event.target.value);
      delete fields.requestedServicesId[index];
      setFields({
        ...fields,
        requestedServicesId: [...fields.requestedServicesId],
      });
    }
  };

  const handleSubmit = async () => {
    const eventHour = parseHour(fields.eventHourId);

    const formattedDate = `${format(
      addDays(new Date(fields.eventDate), 1),
      "yyyy-MM-dd"
    )}T${eventHour}`;

    try {
      await api.post("parties", {
        companyId: params.buffetId,
        birthdayPerson: fields.birthdayPerson,
        birthdayAge: fields.birthdayAge,
        eventDate: formattedDate,
        numberOfGuests: pricing.numberOfGuests,
        partyThemeId: fields.partyThemeId,
        requestedServicesId: fields.requestedServicesId,
      });
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const handleShowView = () => {
    switch (step) {
      case 1:
        return (
          <PartyInformations
            values={{
              birthdayPerson: fields.birthdayPerson,
              birthdayAge: fields.birthdayAge,
              eventDate: fields.eventDate,
              pricingId: fields.pricingId,
              eventHourId: fields.eventHourId,
              price: totalPrice,
            }}
            onChange={onChangeField}
            onChangeSelect={onChangeSelectField}
            nextStep={handleNextStep}
          />
        );

      case 2:
        return (
          <ChoosePartyTheme
            values={{ partyThemeId: fields.partyThemeId }}
            onChange={onChangeSelectField}
            previousStep={handlePrevStep}
            nextStep={handleNextStep}
          />
        );

      case 3:
        return (
          <OptionalServices
            values={{
              requestedServicesId: fields.requestedServicesId,
              price: totalPrice,
            }}
            onChange={onChangeOptionalServicesCheckbox}
            previousStep={handlePrevStep}
            nextStep={handleNextStep}
            submit={handleSubmit}
          />
        );

      case 4:
        return <FinishInvoice />;

      default:
        return <></>;
    }
  };

  return <>{handleShowView()}</>;
};

export default InvoiceParty;
