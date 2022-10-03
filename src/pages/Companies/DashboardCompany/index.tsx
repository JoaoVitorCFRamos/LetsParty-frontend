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
    description?: string | null;
    maxCapacity: number;
    images: IBuffetImage[];
  };
}

export interface IBuffetImage {
  url: string;
  isThumbnail: boolean;
}

const DashboardCompany = () => {
  const [buffetProfile, setBuffetProfile] = useState<IBuffetProfile>();
  const [buffetImages, setBuffetImages] = useState<IBuffetImage[]>([]);

  useEffect(() => {
    api.get<IBuffetProfile>(`/companies/me`).then((response) => {
      setBuffetProfile(response.data);
      response.data.profile.images.forEach((image) => {
        if (!image.isThumbnail) {
          setBuffetImages((images) => [
            ...images,
            {
              url: `${apiUrl}/companies/images/${image.url}`,
              isThumbnail: image.isThumbnail,
            },
          ]);
        }
      });
    });
  }, []);

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
      <div className="dashboardCompany-mainDiv">
        <div className="dashboardCompany-content">
          <div className="dashboardCompany-topContent">
            <div className="dashboardCompany-buffetsInfos">
              {buffetProfile && <ProfilePicture companyId={buffetProfile.id} />}
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
              onDrop={(acceptedFiles) =>
                handleUploadGalleryPhotos(acceptedFiles)
              }
            >
              {({ getRootProps, getInputProps }) => (
                <div className="dashboardCompany-addPhotosDiv">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <label>Adicionar foto(s)</label>
                    <MdAddAPhoto size={16} />
                  </div>
                </div>
              )}
            </Dropzone>
          </div>

          {buffetImages.length > 0 ? (
            <Carousel images={buffetImages} />
          ) : undefined}

          <div className="dashboardCompany-descriptionFrame">
            {buffetProfile && buffetProfile.profile.description !== null ? (
              <>
                <label className="dashboardCompany-aboutCompanyTitle">
                  Sobre o Buffet
                </label>
                <label className="dashboardCompany-aboutCompanyDescription">
                  {buffetProfile?.profile.description}
                </label>
                <label className="dashboardCompany-aboutCompanyTitle">
                  Capacidade máxima suportada no local
                </label>
                <label className="dashboardCompany-aboutCompanyDescription">
                  Máximo de {buffetProfile?.profile.maxCapacity} convidados
                </label>
              </>
            ) : (
              <>
                <label className="dashboardCompany-aboutCompanyTitle">
                  Sobre o Buffet
                </label>
                <label className="dashboardCompany-aboutCompanyDescription">
                  O Buffet ainda não cadastrou uma descrição.
                </label>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardCompany;
