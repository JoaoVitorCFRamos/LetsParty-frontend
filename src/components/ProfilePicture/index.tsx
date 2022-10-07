import "./style.css";
import img from "../../assets/BuffetInfantil.png";
import api, { apiUrl } from "../../services/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Dropzone from "react-dropzone";

interface Props {
  companyId: string;
}

interface IBuffetProfile {
  profile: {
    images: IBuffetImage[];
  };
}

interface IBuffetImage {
  url: string;
  isThumbnail: boolean;
}

const ProfilePicture = ({ companyId }: Props) => {
  const [image, setImage] = useState<IBuffetImage>();

  const handleUploadThumbnailPhoto = (files: any[]) => {
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
          //Integrar com back
          api
            .patch(`/companies/images/${image?.url}/thumbnail`)
            .then((response) => {
              if (response.status === 200) {
                toast("Upload realizado com sucesso");
              }
            });
        }
      })
      .catch((error) => {
        toast("Não foi possível fazer upload da foto");
      });
  };

  useEffect(() => {
    api.get<IBuffetProfile>(`/companies/${companyId}`).then((response) => {
      const imageResponse = response.data.profile.images.find(
        (image) => image.isThumbnail === true
      );

      if (imageResponse) {
        setImage(imageResponse);
      }
    });
  }, [companyId]);

  return (
    <Dropzone
      onDrop={(acceptedFiles) => handleUploadThumbnailPhoto(acceptedFiles)}
    >
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {image ? (
            <img
              className="profilePicture-logoCompany"
              src={`${apiUrl}/companies/images/${image.url}`}
            />
          ) : (
            <img className="chatTemplate-logoCompany" src={img} />
          )}
        </div>
      )}
    </Dropzone>
  );
};

export default ProfilePicture;

// import Dropzone from "react-dropzone";
// import api from "../../services/api";
// import "./style.css";

// const ProfilePicture = () => {
//   const handleUploadThumbnailPhoto = (file: any) => {
//     const formData = new FormData();

//     formData.append("files", file);

//     api
//       .post("/companies/images", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       })
//       .then((response) => {
//         if (response.status === 201) {
//           toast("Upload realizado com sucesso");
//         }
//       })
//       .catch((error) => {
//         toast("Não foi possível fazer upload das fotos");
//       });
//   };

//   return (z
//     <Dropzone
//       onDrop={(acceptedFiles) => handleUploadThumbnailPhoto(acceptedFiles)}
//     >
//       {({ getRootProps, getInputProps }) => (
//         <div className="dashboardCompany-addPhotosDiv">
//           <div {...getRootProps()}>
//             <input {...getInputProps()} />
//             <img src={`` || "../../assets/BuffetInfantil.png"} />
//           </div>
//         </div>
//       )}
//       <div className="chatTemplate-logoCompany"></div>
//     </Dropzone>
//   );
// };
// export default ProfilePicture;
