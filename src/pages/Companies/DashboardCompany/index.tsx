import "./style.css";

import Carousel from "../../../components/Carousel";
import FeedbackCard from "../../../components/FeedbackCard";
import ProfilePicture from "../../../components/ProfilePicture";

import { BsFillPenFill } from "react-icons/bs";
import MenuOptions from "../../../components/MenuOptions";
import { MdOutlineCake } from "react-icons/md";
import { MdAddAPhoto } from "react-icons/md";
import { FaWineGlassAlt } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import api from "../../../services/api";
import { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";



type myCompany = {
  email: string;
  profile: {
    name: string;
  };
};

export const DashboardCompany = () => {




  return (
    <>
      <div className="dashboardCompany-topContent">
        <div className="dashboardCompany-buffetsInfos">
          <ProfilePicture />
          <div className="dashboardCompany-nameLocalDiv">
            <h1>Buffet alegria </h1>
            <label>Zona Norte/SP</label>
          </div>
        </div>
        <div className="dashboardCompany-favoriteDiv">
          <label>Editar</label>
          <BsFillPenFill color="#00a3ff" size={18} />{" "}
        </div>
      </div>
      <div className="dashboardCompany-addressDiv">
        <h1>Endereço</h1>
        <label>Rua Exemplo, 123</label>
      </div>
      <div className="dashboardCompany-myPhotosDiv">
        <h1>Minhas Fotos</h1>
        <div className="dashboardCompany-addPhotosDiv">
          <label>Adicionar foto</label>
          <MdAddAPhoto size={16} />
        </div>
      </div>
      <Carousel />
      <div className="dashboardCompany-bottomContentDiv">
        <MenuOptions
          title="Opções de Decoração"
          icon={<MdOutlineCake size={28} />}
        />
        <div className="dashboarCompany-divisionDiv"></div>
        <MenuOptions
          title="Opções de Bebidas"
          icon={<FaWineGlassAlt size={23} />}
        />
        <div className="dashboarCompany-divisionDiv"></div>
        <MenuOptions
          title="Opções de Alimentação"
          icon={<BiDish size={28} />}
        />
      </div>
    </>
  );
};
export default DashboardCompany;
