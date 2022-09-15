import React from "react";

//styles
import "./styles/SocialMedia-Technologies.css";

function PrintIcons(props) {
  // eslint-disable-next-line prefer-const
  let items = [];

  for (let i = 0; i < props.social.length; i++) {
    items.push(
      <a
        href={props.social[i].url}
        target="_blank"
        rel="noreferrer"
        className="imgLinks"
        key={props.social[i].pk}
      >
        <img className="socialImages" src={props.social[i].url_image} alt="" />
      </a>
    );
  }
  return <div className="container container-socialMedia">{items}</div>;
}

export default function SocialMedia(props) {
  const { socialIcons } = props;

  return <PrintIcons social={socialIcons} />;
}
