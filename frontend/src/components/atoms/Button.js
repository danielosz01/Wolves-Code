/* eslint-disable react/button-has-type */
import React from "react";

//Styles
import "./styles/Button.css";

export default function Button(props) {
  const { styles, text, typeButton } = props;
  return (
    <div className="container-fluid m-0">
      <div className="row">
        <div className="col">
          <button className={styles} type={typeButton}>
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}

// <Button styles="btn btn-primary col-12 contactUs" text="Contact us" />
