/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

//components
import Subtitle from "../components/atoms/Subtitle";
import Button from "../components/atoms/Button";
import SocialMedia from "../components/atoms/SocialMedia";
import Technologies from "../components/atoms/Technologies";
import TeamMembers from "../components/molecules/TeamMembers";
import ContactForm from "../components/organisms/ContactForm";

//styles
import "./styles/Home.css";
import "../components/molecules/styles/NavbarModal.css";

//assets
import photo from "../assets/adminMember.svg";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isOpen: false,
      socialsMedia: [],
      technologies: [],
      team: [],
    };
  }

  //Modal
  showModal = () => {
    this.setState({ isOpen: true });
  };

  hideModal = () => {
    this.setState({ isOpen: false });
  };

  onMountSocialMedia(loadStatus, resultStatus, errorStatus) {
    this.setState({
      isLoaded: loadStatus,
      socialsMedia: resultStatus,
      error: errorStatus,
    });
  }

  onMountTechnologies(loadStatus, resultStatus, errorStatus) {
    this.setState({
      isLoaded: loadStatus,
      technologies: resultStatus,
      error: errorStatus,
    });
  }

  onMountTeam(loadStatus, resultStatus, errorStatus) {
    this.setState({
      isLoaded: loadStatus,
      team: resultStatus,
      error: errorStatus,
    });
  }

  // eslint-disable-next-line consistent-return
  filterCharge(array) {
    for (let i = 0; i < array.position.length; i++) {
      if (!(array.position[i].name.toLowerCase() === "admin")) {
        return [];
      }
      return true;
    }
  }

  async componentDidMount() {
    try {
      const socialMediaResponse = await fetch(
        "http://www.wolvesweb.tech/api/v1/social-media/"
      );
      const technologiesResponse = await fetch(
        "http://www.wolvesweb.tech/api/v1/technologies/"
      );
      const teamResponse = await fetch(
        "http://www.wolvesweb.tech/api/v1/team-members/"
      );

      const jsonSocialMedia = await socialMediaResponse.json();
      const jsonTechnologies = await technologiesResponse.json();
      const jsonTeam = await teamResponse.json();

      this.onMountSocialMedia(true, jsonSocialMedia, null);
      this.onMountTechnologies(true, jsonTechnologies, null);
      this.onMountTeam(true, jsonTeam, null);

      if (!socialMediaResponse.ok) {
        this.onMountSocialMedia(true, [], socialMediaResponse.statusText);
      }
      if (!technologiesResponse.ok) {
        this.onMountTechnologies(true, [], technologiesResponse.statusText);
      }
      if (!teamResponse.ok) {
        this.onMountTeam(true, [], teamResponse.statusText);
      }
    } catch (error) {
      this.onMountSocialMedia(true, [], error);
      this.onMountTechnologies(true, [], error);
      this.onMountTeam(true, [], error);
    }
  }

  render() {
    const {
      error,
      isLoaded,
      socialsMedia,
      technologies,
      team,
      isOpen,
    } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="principalContent col col-sm col-md-9 col-lg-10 col-xxl-11">
            <Subtitle
              content="A creative agency"
              colorSubtitle="white"
              classSubtitle="subtitle d-none d-lg-block"
            />
            <h1 className="title col-10 col-md-12">
              WOLVES
              <br className="d-md-none" />
              CODE<span className="spanTitle">.</span>
            </h1>
            <h2 className="subtitleHowl">HOWL WITH US</h2>
            <div className="row secondRow">
              <div className="col-12 col-sm-12 col-xxl-4 buttonHome">
                <a onClick={this.showModal}>
                  <Button text="CONTACT US" styles="contactUs" typeButton="button" />
                </a>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-xxl-4 whatWeDo">
                <h2 className="subtitleInfo">WHAT WE DO?</h2>
                <p className="paragraphsWhatWeDo">
                  We build <span className="spanParagraphs">solutions</span> for
                  startups and established businesses...
                  <span className="spanParagraphs">Coding</span> it for you.
                </p>
                <SocialMedia socialIcons={socialsMedia} />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-xxl-4 d-none d-md-block technologiesUsed">
                <h2 className="subtitleInfo">TECHNOLOGIES USED</h2>
                <Technologies technologiesIcons={technologies} />
              </div>
            </div>
          </div>
          <div className="teamContent col-0 col-sm-0 col-md-3 col-lg-2 col-xxl-1 d-none d-md-flex">
            <h2 className="teamText">TEAM</h2>
            {team.filter(this.filterCharge).map((admin) => (
              <TeamMembers
                key={admin.pk}
                firstName={admin.first_name}
                lastName={admin.last_name}
                image={admin.picture ? admin.url_image : photo}
              />
            ))}
          </div>
        </div>
        <Modal
          show={isOpen}
          onHide={this.hideModal}
          dialogClassName="divModalContact"
        >
          <button
            type="button"
            onClick={this.hideModal}
            className="buttonModalContact h-auto"
          >
            <p>close</p>
          </button>
          <ContactForm />
        </Modal>
      </div>
    );
  }
}
