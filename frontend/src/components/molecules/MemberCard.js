import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

//styles
import "./styles/MemberCard.css";

export default function MemberCard(props) {
  const {
    color,
    firstName,
    lastName,
    charge,
    image,
    message,
    technologies,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const backgroundStyleLogo = {
    backgroundImage: `url("${image}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "white",
  };

  const colorBackground = {
    backgroundColor: `${color}`,
  };

  const colorText = {
    color: `${color}`,
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  // eslint-disable-next-line consistent-return
  const WithoutAdmin = (array) => {
    if (!(array.name === "Admin")) {
      return (
        <h2 className="h2Modal" key={array.id} style={colorText}>
          {array.name}
        </h2>
      );
    }
  };

  return (
    <>
      <button
        className="btn btn btn-primary btnMembers"
        type="button"
        onClick={showModal}
        style={colorBackground}
      >
        <div className="row">
          <div className="container col-9 col-lg-12 text-start">
            <h1>{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h1>
            {charge.map(WithoutAdmin)}
          </div>
          <div className="container col-3 col-lg-12 d-flex justify-content-end align-items-md-end">
            <div className="imgMemberTeam" style={backgroundStyleLogo} />
          </div>
        </div>
      </button>
      <Modal show={isOpen} onHide={hideModal} dialogClassName="divModal">
        <button
          type="button"
          onClick={hideModal}
          className="buttonModal h-auto"
        >
          <p>close</p>
        </button>
        <div className="container-fluid d-flex flex-column flex-md-row">
          <div style={backgroundStyleLogo} className="imgMemberModal" />
          <div className="container-fluid">
            <h1 className="h1Modal">{`${firstName} ${lastName}`}</h1>
            {charge.map(WithoutAdmin)}
          </div>
        </div>
        <p className="pModal">{message}</p>
        <div
          className="containerIconsModal d-flex flex-row"
          style={colorBackground}
        >
          {technologies.map((icon) => (
            <img
              className="iconsModal"
              key={icon.pk}
              src={icon.url_image}
              alt={icon.name}
            />
          ))}
        </div>
      </Modal>
    </>
  );
}
