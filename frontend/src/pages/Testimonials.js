import React, { Component } from "react";

//components
import Subtitle from "../components/atoms/Subtitle";
import TestimonyList from "../components/organisms/TestimonyList";

//styles
import "./styles/Testimonials.css";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="testimonialsPage">
        <Subtitle
          content="We listen to our customers"
          colorSubtitle="white"
          classSubtitle="subtitle subtitleTestimonials"
        />
        <TestimonyList />
      </div>
    );
  }
}
