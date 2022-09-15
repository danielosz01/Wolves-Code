import React from "react";

//assets
import starIcon from "../../assets/star-fill.svg";

//styles
import "./styles/Starts.css";

function Repeat(props) {
  // eslint-disable-next-line prefer-const
  let items = [];

  for (let i = 0; i < props.num; i++) {
    items.push(<img src={starIcon} alt="" aria-hidden="true" key={i} />);
  }
  return <div className="container-star">{items}</div>;
}

export default function Starts(props) {
  const { record } = props;

  return <Repeat num={record} />;
}
