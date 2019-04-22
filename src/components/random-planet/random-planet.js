import React, { Component } from 'react';

import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";
import Error from "../error";

import './random-planet.css';

export default class RandomPlanet extends Component {

  constructor() {
    super();
    this.state = {
      planet: {},
      loading: true,
      error: false
    };
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  }

  componentDidMount() {
    this.swapi = new SwapiService();
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 3000);
  }

  onError = (err) => {
    this.setState({
      loading: false,
      error: true
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;

    this.swapi.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
  }

  render() {
    const { planet, loading, error } = this.state;

    const errorContent = error ? <Error /> : null;
    const spinnerContent = loading ? <Spinner /> : null;
    const planetContent = !(loading || error) ? <PlanetContent planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorContent}
        {spinnerContent}
        {planetContent}
      </div>

    );
  }
}

const PlanetContent = ({ planet }) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  return(
    <React.Fragment>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt={name} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
