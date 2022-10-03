import { useState } from "react";
import Dropzone from "react-dropzone";
import { toast } from "react-toastify";
import BlueButton from "../../../components/BlueButton";
import api from "../../../services/api";
import "./style.css";

const AddTheme = () => {
  const [themeInput, setThemeInput] = useState<string>();
  const [image, setImage] = useState<any>();

  const handleSubmit = () => {
    const formData = new FormData();

    if (!themeInput) {
      toast.error("Por favor, infome o tema");
    } else {
      formData.append("name", themeInput);
    }

    if (!image) {
      toast.error("Por favor, faça upload de uma imagem do tema");
    } else {
      formData.append("file", image);
    }

    if (themeInput && image) {
      api
        .post("companies/party-themes", formData)
        .then((response) => {
          if (response.status === 201) {
            toast.success("Tema criado com sucesso!");
          }
        })
        .catch(() => {
          toast.error("Não foi possível cadastrar o tema");
        });
    }
  };

  return (
    <div className="addOptionalServices-mainDiv">
      <div className="addOptionalServices-mainContent">
        <label>
          Informe o tema e envie uma foto da mesa de decoração para nós
        </label>
        <input
          type="text"
          value={themeInput}
          onChange={(e) => {
            setThemeInput(e.target.value);
          }}
          placeholder="Tema"
        />
        <div>
          <Dropzone onDrop={(acceptedFiles) => setImage(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <div className="dashboardCompany-addPhotosDiv">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                </div>
              </div>
            )}
          </Dropzone>
        </div>
      </div>
      <div className="addOptionalServices-buttonDiv">
        <BlueButton onClick={() => handleSubmit()} title="Cadastrar" />
      </div>
    </div>
  );
};

export default AddTheme;
