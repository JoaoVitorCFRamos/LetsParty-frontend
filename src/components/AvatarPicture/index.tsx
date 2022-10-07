import "./style.css";
import img from "../../assets/BuffetInfantil.png";
import api, { apiUrl } from "../../services/api";
import { useEffect, useState } from "react";

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

const AvatarPicture = ({ companyId }: Props) => {
  const [image, setImage] = useState<IBuffetImage>();

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

  return image ? (
    <img
      className="avatarPicture-logoCompany"
      src={`${apiUrl}/companies/images/${image.url}`}
    />
  ) : (
    <img className="avatarPicture-logoCompany" src={img} />
  );
};

export default AvatarPicture;
