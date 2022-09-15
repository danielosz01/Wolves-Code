/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "../atoms/Button";

//styles
import "./styles/ContactForm.css";

//assets
import Reset from "../../assets/reset.svg";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      error: null,
      validated: false,
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleSubmit = async (event) => {
    const form = event.currentTarget;
    const { name, email, subject, message } = this.state;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const data = {
      name,
      email,
      subject,
      message,
    };
    this.setState({ validated: true });
    event.preventDefault();
    try {
      await fetch("http://www.wolvesweb.tech/api/v1/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      this.setState({
        error,
        isLoaded: true,
      });
    }
  };

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangeSubject(event) {
    this.setState({ subject: event.target.value });
  }

  handleChangeMessage(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    const { validated, isLoaded, error } = this.state;

    if (!isLoaded) {
      return <p>Loading...</p>;
    }

    if (error) {
      return (
        <>
          <p>{error}</p>
          <p>
            Please try later again or send us a message to
            teamwolvescode@gmail.com
          </p>
        </>
      );
    }

    return (
      <div className="row">
        <div className="container-fluid formContainer col-lg-7">
          <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group controlId="validationCustom01">
                <Form.Control
                  required
                  type="text"
                  placeholder="What's your name?"
                  onChange={this.handleChangeName}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom01">
                <Form.Text className="text-muted">
                  Please, enter the complete email address (example:
                  example@example.com)
                </Form.Text>
                <Form.Control
                  required
                  type="email"
                  placeholder="What's your email?"
                  onChange={this.handleChangeEmail}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom01">
                <Form.Control
                  required
                  type="text"
                  placeholder="Subject"
                  onChange={this.handleChangeSubject}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom01">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  onChange={this.handleChangeMessage}
                />
              </Form.Group>
            </Form.Row>
            <div className="row d-flex align-items-center">
              <div className="container-fluid col-8">
                <Button styles="send" text="Send" typeButton="submit" />
              </div>
              <div className="container-fluid col-4 d-flex align-items-center">
                <button className="buttonReset" type="reset">
                  <img src={Reset} alt="reset values" />
                </button>
              </div>
            </div>
          </Form>
        </div>
        <div className="container stepsContainer col-lg-5">
          <h1 className="stepsTitle">What's next</h1>
          <span className="stepsNumber">1.</span>
          <p className="stepsParagrahp">
            After sending us a message, we'll contact to you within 6-24 hours
          </p>
          <span className="stepsNumber">2.</span>
          <p className="stepsParagrahp">
            In the next step, we'll contact to you to collect all the necessary
            information about the project
          </p>
          <span className="stepsNumber">3.</span>
          <p className="stepsParagrahp">
            To finish this stage, we'll indicated the guidelines and
            requirements to start developing
          </p>
        </div>
      </div>
    );
  }
}
