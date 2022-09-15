import React from "react";

//styles
import "./styles/Testimony.css";

//assets
import quotes from "../../assets/quotes.svg";

//atoms
import Starts from "../atoms/Starts";
import ClientInfo from "./ClientInfo";

export default function Testimony(props) {
  const {
    testimonyMessage,
    record,
    clientImg,
    clientName,
    clientCharge,
    businessName,
    businessImg,
  } = props;

  const backgroundStyleLogo = {
    backgroundImage: `url("${businessImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  let recordProm = 0;
  let sum = 0;
  if (record.length > 1) {
    record.forEach((rec) => {
      sum += rec.score;
    });
    recordProm = Math.round(sum / record.length);
  } else {
    recordProm = record[0].score;
  }

  return (
    <div className="card text-white bg-primary shadow">
      <div className="card-body">
        <div className="secret-info">
          <h1>{businessName}</h1>
          <div className="container-logoImg" style={backgroundStyleLogo} />
        </div>
        <div className="container-testimonyInfo">
          <img className="quotes" src={quotes} alt="" aria-hidden="true" />
          <p className="card-text">{testimonyMessage}</p>
          <Starts record={recordProm} />
        </div>
        <ClientInfo img={clientImg} client={clientName} charge={clientCharge} />
      </div>
    </div>
  );
}
