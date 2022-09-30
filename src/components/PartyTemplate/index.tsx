import ProfilePicture from "../ProfilePicture"
import react, { useState, FC } from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";

interface PartyTemplate {
  birthdayPerson: string;
  date: any;
  buffetName: string;
  stats: any;
}

export const PartyTemplate: react.FC<PartyTemplate> = (props) => {
  const { birthdayPerson, date, buffetName, stats } = props
  const navigate = useNavigate();



  return (
    <div className="partyTemplate-mainDiv" onClick={() => navigate('/partyDashboard')}>
      <div className="partyTemplate-leftSide">
        <label>Aniversariante: <label className="partyTemplate-infosBD">{birthdayPerson}</label></label>
        <label>Data da comemoração: <label className="partyTemplate-infosBD">{date}</label></label>
        <label>Buffet realizador:</label>
        <ProfilePicture />
        <label className="partyTemplate-infosBD">{buffetName}</label>
      </div>
      <div className="partyTemplate-rightSide">
        <label>Stataus: <label>{stats}</label> </label>
        <label className="partyTemplate-labelSeeMore">Ver mais</label>
      </div>
    </div >
  )
}

export default PartyTemplate