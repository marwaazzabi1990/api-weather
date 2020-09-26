import React, { Component } from "react";
import axios from "axios";

export default class UsersProffesionnel extends Component {
  state = {
    name: "",
    weather: {},
  };
  change = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.name}&appid=4d06a160fff86c4063fd730b65a05b55`
      )
      .then((res) => {
        this.setState({ weather: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    const iconName = Object.values(this.state.weather).length
      ? this.state.weather.weather[0].icon
      : "";
  };
  render() {
    return (
      <>
        {" "}
        <h1> weather </h1>
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.change()}> change </button>
        <br />
        temp:{" "}
        <h3>
          {Object.values(this.state.weather).length
            ? Math.round(this.state.weather.main.temp)
            : ""}
        </h3>
        wind:{" "}
        <h3>
          {Object.values(this.state.weather).length
            ? this.state.weather.wind.speed
            : ""}
        </h3>
        country:{" "}
        <h3>
          {Object.values(this.state.weather).length
            ? this.state.weather.name
            : ""}
        </h3>
        <div className="weather-icon">
          <img
            style={{ width: "70px" }}
            src="http://openweathermap.org/img/w/02d"
          />
        </div>
      </>
    );
  }
}
