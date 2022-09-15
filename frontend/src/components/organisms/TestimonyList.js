import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

//molecules
import Testimony from "../molecules/Testimony";

//styles
import "./styles/TestimonyList.css";

//assets
import user from "../../assets/logo.svg";
import arrowLeft from "../../assets/caret-left-fill.svg";
import arrowRight from "../../assets/caret-right-fill.svg";

export default class TestimonyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      clients: [],
    };
    this.scroll = React.createRef();
    this.handleRigthClick = this.handleRigthClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
  }

  handleRigthClick() {
    this.scroll.current ? (this.scroll.current.scrollLeft += 100) : null;
  }

  handleLeftClick() {
    this.scroll.current ? (this.scroll.current.scrollLeft -= 100) : null;
  }

  componentDidMount() {
    fetch("http://0.0.0.0:8000/api/v1/clients/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            clients: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, clients } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="row rowTestimonyList">
        <div className="col listOfTestimonies" ref={this.scroll}>
          {clients.map((client) => (
            <Testimony
              key={client.id}
              clientName={client.name}
              businessName={client.business}
              testimonyMessage={client.testimony}
              clientCharge={client.staff_position}
              clientImg={client.image ? client.image : user}
              businessImg={
                client.projects[0].image ? client.projects[0].image : user
              }
              record={client.projects}
            />
          ))}
        </div>
        <button
          type="button"
          className="left btn btn-primary btn-sm"
          onClick={this.handleLeftClick}
          aria-hidden="true"
          data-tip="Left"
          data-for="tooltipTestimony"
        >
          <img className="arrowImg" src={arrowLeft} alt="" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="rigth btn btn-primary btn-sm"
          onClick={this.handleRigthClick}
          aria-hidden="true"
          data-tip="Rigth"
          data-for="tooltipTestimony"
        >
          <img
            className="arrowImg"
            src={arrowRight}
            alt=""
            aria-hidden="true"
          />
        </button>
        <ReactTooltip
          id="tooltipTestimony"
          place="top"
          effect="solid"
          getContent={(dataTip) => `${dataTip}`}
          className="tooltipTestimony"
        />
      </div>
    );
  }
}
