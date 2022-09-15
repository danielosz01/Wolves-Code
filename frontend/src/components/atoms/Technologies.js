import React from "react";

//styles
import "./styles/SocialMedia-Technologies.css";

function PrintIcons(props) {
  // eslint-disable-next-line prefer-const
  let items = [];

  for (let i = 0; i < props.technologies.length; i++) {
    items.push(
      <img
        className="technologiesImages"
        src={props.technologies[i].url_image}
        alt=""
        key={props.technologies[i].pk}
      />
    );
  }
  return <div className="container container-technologies">{items}</div>;
}

export default function Technologies(props) {
  const { technologiesIcons } = props;

  return <PrintIcons technologies={technologiesIcons} />;
}
