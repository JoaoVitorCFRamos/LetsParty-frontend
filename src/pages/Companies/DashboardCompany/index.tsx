import "./style.css";
import Carousel from "../../../components/Carousel";
import ProfilePicture from "../../../components/ProfilePicture";
import { MdAddAPhoto } from "react-icons/md";
import { useEffect, useState } from "react";
import api, { apiUrl } from "../../../services/api";
import { useAuth } from "../../../hooks/useAuth";
import Dropzone from "react-dropzone";
import { toast } from "react-toastify";

interface IBuffetProfile {
  id: string;
  profile: {
    name: string;
    city: string;
    neighborhood: string;
    addressLine: string;
    thumbnail: string;
    images: IBuffetImage[];
  };
}

export interface IBuffetImage {
  url: string;
}

const DashboardCompany = () => {
  const { user } = useAuth();
  const [buffetProfile, setBuffetProfile] = useState<IBuffetProfile>();
  const [buffetImages, setBuffetImages] = useState<IBuffetImage[]>([]);

  useEffect(() => {
    api.get<IBuffetProfile>(`/companies/${user?.id}`).then((response) => {
      setBuffetProfile(response.data);
      response.data.profile.images.forEach((image) => {
        setBuffetImages((images) => [
          ...images,
          { url: `${apiUrl}/companies/images/${image.url}` },
        ]);
      });
    });
  }, [user?.id]);

  const handleUploadGalleryPhotos = (files: any[]) => {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    api
      .post("/companies/images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        if (response.status === 201) {
          toast("Upload realizado com sucesso");
        }
      })
      .catch((error) => {
        toast("Não foi possível fazer upload das fotos");
      });
  };

  return (
    <>
      <div className="dashboardCompany-topContent">
        <div className="dashboardCompany-buffetsInfos">
          <ProfilePicture />
          <div className="dashboardCompany-nameLocalDiv">
            <h1>{buffetProfile?.profile.name}</h1>
            <label>{`${buffetProfile?.profile.neighborhood} - ${buffetProfile?.profile.city}`}</label>
          </div>
        </div>
      </div>
      <div className="dashboardCompany-addressDiv">
        <h1>Endereço</h1>
        <label>{buffetProfile?.profile.addressLine}</label>
      </div>
      <div className="dashboardCompany-myPhotosDiv">
        <h1>Galeria de Fotos</h1>
        <Dropzone
          onDrop={(acceptedFiles) => handleUploadGalleryPhotos(acceptedFiles)}
        >
          {({ getRootProps, getInputProps }) => (
            <div className="dashboardCompany-addPhotosDiv">
              <div  {...getRootProps()}>
                <input  {...getInputProps()} />
                <label>Adicionar foto(s)</label>
                <MdAddAPhoto size={16} />
              </div>
            </div>
          )}
        </Dropzone>
      </div>

      {buffetImages.length > 0 ? <Carousel images={buffetImages} /> : undefined}

      {/* Aqui deve ser possivel alterar a escrição do buffet e CRUD 
          de: 
            Serviços opcionais (por meio de formulário)
            Opções de decoração (formulário e adicionar foto) 
            Setar uma foto para ser a thumbnail do anuncio (Um botão)
      */}
    </>
  );
};
export default DashboardCompany;
