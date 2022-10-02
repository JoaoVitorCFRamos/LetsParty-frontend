import "./style.css";
import img from "../../assets/BuffetInfantil.png"

const ProfilePicture = () => {
  return <div >
    <img className="chatTemplate-logoCompany" src={img} ></img>
  </div >;
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
