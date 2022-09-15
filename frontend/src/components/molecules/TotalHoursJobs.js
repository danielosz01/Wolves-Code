import React from "react";

//styles
import "./styles/TotalHoursJobs.css";

export default function TotalHoursJobs(props) {
  const { text, info } = props;

  return (
    <>
      <h1 className="totalHourJob-h1">{info}+</h1>
      <h2 className="totalHourJob-h2">{text}</h2>
    </>
  );
}
