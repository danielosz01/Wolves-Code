import React from "react";

//styles
import "./styles/TeamMembers.css";

export default function TeamMembers(props) {
  const { firstName, lastName, image } = props;

  const backgroundStyleLogo = {
    backgroundImage: `url("${image}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "white",
  };

  return (
    <div className="container-admins">
      <div className="container-Image" style={backgroundStyleLogo} />
      <h2 className="fullName">
        {firstName}
        <br />
        <span className="lastName">{lastName.toUpperCase()}</span>
      </h2>
    </div>
  );
}
