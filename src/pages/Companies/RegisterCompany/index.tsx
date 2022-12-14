import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useDebounce } from "../../../hooks/useDebounce";
import BlueButton from "../../../components/BlueButton";
import LogoLp from "../../../assets/Icon.png";
import "./style.css";

interface IRegisterCompany {
  name: string;
  cnpj: string;
  maxCapacity: number | "";
  email: string;
  password: string;
  address: {
    zipCode: string;
    street: string;
    number: number | "";
    state: string;
    city: string;
    neighborhood: string;
  };
  contact: {
    phoneNumber: string;
  };
}

const RegisterCompany = () => {
  const [fields, setFields] = useState<IRegisterCompany>({
    name: "",
    cnpj: "",
    maxCapacity: "",
    email: "",
    password: "",
    address: {
      zipCode: "",
      street: "",
      number: "",
      state: "",
      city: "",
      neighborhood: "",
    },
    contact: {
      phoneNumber: "",
    },
  });
  const [showAddressFields, setShowAddressFields] = useState<boolean>(false);
  const debouncedValue = useDebounce<string>(fields.address.zipCode, 500);

  const navigate = useNavigate();

  const onChangeFields =
    (field: string) =>
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFields({ ...fields, [field]: event.target.value });
      };

  const registerCompany = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    api
      .post("/companies", fields)
      .then((response) => {
        if (response.status === 201) {
          navigate("/login-business");
        }
      })
      .catch((error: AxiosError<any>) => {
        error.response?.data?.message.forEach((message: any) => {
          toast(message);
        });
      });
  };

  useEffect(() => {
    if (debouncedValue.length === 8) {
      api
        .get("/address", { params: { zipCode: debouncedValue } })
        .then((response) => {
          setFields((oldState) => ({
            ...oldState,
            address: {
              ...oldState.address,
              street: response.data.street,
              state: response.data.state,
              city: response.data.city,
              neighborhood: response.data.neighborhood,
            },
          }));
          setShowAddressFields(true);
        });
    }
  }, [debouncedValue]);

  return (
    <div className="registerCompany-mainDiv">
      <div className="registerCompany-registerDiv">
        <div className="registerCompany-headerDiv">
          <img src={LogoLp} />
          <label className="registerCompany-header">
            Cadastre-se para virar uma empresa parceira
          </label>
        </div>
        <div className="registerCompany-inputsDiv">
          <input
            onChange={onChangeFields("name")}
            value={fields.name}
            type="text"
            placeholder="Nome da empresa"
          />
          <input
            onChange={onChangeFields("cnpj")}
            value={fields.cnpj}
            type="text"
            placeholder="CNPJ da empresa"
          />
          <input
            onChange={onChangeFields("maxCapacity")}
            value={fields.maxCapacity}
            type="number"
            placeholder="Capacidade m??xima do local"
          />
          <input
            type="tel"
            onChange={(e) =>
              setFields({
                ...fields,
                contact: { phoneNumber: e.target.value },
              })
            }
            value={fields.contact.phoneNumber}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="Telefone para contato (com DDD)"
          />
          <input
            onChange={onChangeFields("email")}
            value={fields.email}
            type="email"
            placeholder="Endere??o de E-mail da empresa"
          />

          <input
            onChange={onChangeFields("password")}
            value={fields.password}
            type="password"
            placeholder="Senha"
          />
          <input
            onChange={(e) =>
              setFields({
                ...fields,
                address: { ...fields.address, zipCode: e.target.value },
              })
            }
            value={fields.address.zipCode}
            type="text"
            placeholder="CEP"
          />
        </div>
        {showAddressFields ? (
          <>
            <div className="divNonosLabels">
              <div className="registerCompany-divInputsR">
                <label>Logradouro:</label>
                <input
                  disabled={true}
                  value={fields.address.street}
                  type="text"
                  className="registerCopany-inputsCEP"
                />
              </div>
              <div className="registerCompany-divInputsR">
                <label>N??mero:</label>
                <input
                  onChange={(e) =>
                    setFields({
                      ...fields,
                      address: {
                        ...fields.address,
                        number: Number(e.target.value),
                      },
                    })
                  }
                  value={fields.address.number}
                  type="text"
                  className="registerCopany-inputsCEP"
                />
              </div>
              <div className="registerCompany-divInputsR">

                <label>Estado:</label>
                <input disabled={true} value={fields.address.state} type="text" className="registerCopany-inputsCEP" />
              </div>
              <div className="registerCompany-divInputsR">
                <label>Cidade:</label>
                <input disabled={true} value={fields.address.city} type="text" className="registerCopany-inputsCEP" />
              </div>
              <div className="registerCompany-divInputsR">
                <label>Bairro:</label>
                <input
                  disabled={true}
                  value={fields.address.neighborhood}
                  type="text"
                  className="registerCopany-inputsCEP"
                />
              </div>
            </div>
          </>
        ) : undefined}
        <div className="registerCompany-divButton">
          <BlueButton onClick={(e) => registerCompany(e)} title="Cadastrar" />
        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;
