import React, { Component } from "react";

//components
import Subtitle from "../components/atoms/Subtitle";
import MemberCard from "../components/molecules/MemberCard";

//styles
import "./styles/AboutUs.css";

//assets
import photo from "../assets/adminMember.svg";

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      team: [],
      colors: [],
    };
  }

  onMountTeam(loadStatus, resultStatus, errorStatus) {
    this.setState({
      isLoaded: loadStatus,
      team: resultStatus,
      error: errorStatus,
    });
  }

  onMountColors(loadStatus, resultStatus, errorStatus) {
    this.setState({
      isLoaded: loadStatus,
      colors: resultStatus,
      error: errorStatus,
    });
  }

  async componentDidMount() {
    try {
      const teamAboutUsResponse = await fetch(
        "http://www.wolvesweb.tech/api/v1/team-members/"
      );
      const colorsResponse = await fetch("http://www.wolvesweb.tech/api/v1/colors/");

      const jsonTeamAboutUs = await teamAboutUsResponse.json();
      const jsonColors = await colorsResponse.json();

      this.onMountTeam(true, jsonTeamAboutUs, null);
      this.onMountColors(true, jsonColors, null);

      if (!teamAboutUsResponse.ok) {
        this.onMountTeam(true, [], teamAboutUsResponse.statusText);
      }
      if (!colorsResponse.ok) {
        this.onMountColors(true, [], colorsResponse.statusText);
      }
    } catch (error) {
      this.onMountTeam(true, [], error);
      this.onMountColors(true, [], error);
    }
  }

  render() {
    const { error, isLoaded, team, colors } = this.state;
    const colorArray = colors.map((color) => color.code);

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div className="row">
        <div className="container container-contentAboutUs col-12 col-xxl-6">
          <Subtitle
            content="Who we are?"
            colorSubtitle="#0B9ED9"
            classSubtitle="subtitle subtitleAboutUs subtitleFirstAboutUs"
          />
          <p className="paragraphAboutUs">
            We are an agency dedicated to <span>web development</span> and{" "}
            <span>digital interface design</span>, built and nurtured little by
            the dream and hard work of a couple of friends.
            <br />
            <br />
            With a clear trend towards personal <span>
              development
            </span> and <span>advancement</span> of knowledge.
          </p>
          <Subtitle
            content="Our vision"
            colorSubtitle="#0B9ED9"
            classSubtitle="subtitle subtitleAboutUs"
          />
          <p className="paragraphAboutUs">
            To make WolvesCode a company with solid foundations, capable of
            providing high-end service.
          </p>
          <Subtitle
            content="Our mission"
            colorSubtitle="#0B9ED9"
            classSubtitle="subtitle subtitleAboutUs"
          />
          <p className="paragraphAboutUs">
            Offer our clients web tools with reliable technologies and
            cutting-edge designs that promote competitive development and
            maximize the potential of their businesses.
          </p>
        </div>
        <div className="container container-contentAboutUsTeam col-12 col-xxl-6 d-flex flex-column flex-lg-row flex-xxl-column justify-content-xxl-center align-items-xxl-end">
          {team.map((member, index, array) => (
            <MemberCard
              key={member.pk}
              firstName={member.first_name}
              lastName={member.last_name}
              charge={member.position}
              image={member.picture ? member.url_image : photo}
              color={colorArray[index]}
              message={member.description}
              technologies={member.technologies}
            />
          ))}
        </div>
      </div>
    );
  }
}
