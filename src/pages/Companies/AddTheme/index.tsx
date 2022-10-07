import { useEffect, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import BlueButton from "../../../components/BlueButton";
import api from "../../../services/api";
import "./style.css";

const AddTheme = () => {
  const [themeInput, setThemeInput] = useState<string>();
  const [files, setFiles] = useState<any[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const handleSubmit = () => {
    const formData = new FormData();

    if (!themeInput) {
      toast.error("Por favor, infome o tema");
    } else {
      formData.append("name", themeInput);
    }

    formData.append("file", files.shift());

    api
      .post("companies/party-themes", formData)
      .then((response) => {
        if (response.status === 201) {
          setThemeInput("");
          setFiles([]);
          toast.success("Tema criado com sucesso!");
        }
      })
      .catch(() => {
        toast.error("Não foi possível cadastrar o tema");
      });
  };

  const thumbs = files.map((file) => (
    <div className="addTheme-thumb" key={file.name}>
      <div className="addTheme-thumb-inner">
        <img
          src={file.preview}
          className="addTheme-img"
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <div className="addTheme-mainDiv">
      <div className="addTheme-mainContent">
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
        <section className="addTheme-container">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Arraste uma imagem aqui. Ou clique para selecionar uma</p>
          </div>
          <aside className="addTheme-thumbsContainer">{thumbs}</aside>
        </section>
      </div>
      <div className="addOptionalServices-buttonDiv">
        <BlueButton onClick={() => handleSubmit()} title="Cadastrar" />
      </div>
    </div>
  );
};

export default AddTheme;
