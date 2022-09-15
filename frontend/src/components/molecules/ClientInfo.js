import React from "react";

//styles
import "./styles/ClientInfo.css";

export default function ClientInfo(props) {
  const { img, client, charge } = props;
  const backgroundStyle = {
    backgroundImage: `url("${img}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="container-clientInfo">
      <div className="container-img" style={backgroundStyle} />
      <div className="container-info">
        <h2>{client}</h2>
        <h3>{charge}</h3>
      </div>
    </div>
  );
}
