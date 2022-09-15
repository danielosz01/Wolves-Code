import React, { Component } from "react";

//components
import Subtitle from "../components/atoms/Subtitle";
import Starts from "../components/atoms/Starts";
import TotalHoursJobs from "../components/molecules/TotalHoursJobs";

//styles
import "./styles/Stats.css";

export default class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stats: [],
    };
  }

  componentDidMount() {
    fetch("http://0.0.0.0:8000/api/v1/stats/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            stats: result,
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
    const { error, isLoaded, stats } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container col-12 col-xxl-8 statsPage">
        <Subtitle
          content="Stats"
          colorSubtitle="white"
          classSubtitle="subtitle subtitleStats"
        />
        <p className="statsParagraph">
          We create products tailored to your needs, helping your business grow
          with the use of the internet.
        </p>
        <div className="row">
          <div className="container col-12 col-md-6 col-lg-7 totalHours">
            <TotalHoursJobs text="Total hours" info={stats.total_hours} />
          </div>
          <div className="container col-12 col-md-6 col-lg-5 totalJobs">
            <TotalHoursJobs text="Total jobs" info={stats.total_jobs} />
          </div>
        </div>
        <Starts record={Math.round(stats.total_score)} />
        <p className="statsParagraphScore">
          WolvesCode is rated {Math.round(stats.total_score)}/5 average from
          {` ${stats.total_clients} `}
          customers
        </p>
      </div>
    );
  }
}
